import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { searchMovies } from '../../api/api';
import styled from './Movies.module.css'

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const fetchData = useCallback(async (query) => {
    try {
      const movies = await searchMovies(query);
      setSearchResults(movies);
      setSearchPerformed(true);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  }, []);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchMovie(query);
      fetchData(query);
    }
  }, [searchParams, fetchData]);

  const location = useLocation();

  const onGoBackClick = () => {
    if (location.pathname.includes('/movies')) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  const handleSubmitSearchMovie = (query) => {
    setSearchParams({ query: query });
  };

  return (
    <div className={styled.moviesContainer}>
      <h1>Search Movies</h1>
      <input
        className={styled.searchInput}
        type="text"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <button className={styled.btn} onClick={() => handleSubmitSearchMovie(searchMovie)}>Search</button>
      {searchPerformed && searchResults.length > 0 ? (
        <div className={styled.resultsContainer}>
          <h2>Search Results</h2>
            <button className={styled.btn}  onClick={onGoBackClick}>Go Back</button>
          <ul className={styled.resultsList}>
            {searchResults.map((movie) => (
              <li className={styled.resultsListItem} key={movie.id}>
                <Link className={styled.movieLink}  to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : searchPerformed && searchResults.length === 0 ? (
        <p>Nothing found for your request.</p>
      ) : null}
    </div>
  );
};

export default Movies;