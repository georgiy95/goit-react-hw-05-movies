import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'api/Api'; 
import css from './MoviesPage.module.css';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
 

  useEffect(() => {
    if (query === '' || query === null) {
      setMovies([]);
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetchMoviesSearch(query);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.username.value });
    e.currentTarget.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
      <h1 className={css.title}>Search Movies</h1>
        <input name="username"  className={css.input}></input>
        <button className={css.button}>Search</button>
        <MovieList movies={movies} />
      </form>
    </main>
  );
};
