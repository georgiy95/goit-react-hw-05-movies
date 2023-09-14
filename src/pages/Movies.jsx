import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom'; 
import { fetchMovieByKeyWord } from '../services/Api';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import {
  List,
  ListItem,
  SectionTitle,
  StyledLink,
  StyledSection,
} from '../components/MovieList/MovieList.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();


 useEffect(() => {
    const query = searchParams.get('query') ?? ''; 
    if (!query) return;

const getMovie = async () => {
      try {
        const { results } = await fetchMovieByKeyWord(query);
    if (results.length === 0) {
          alert('No movies found');
          setMovies([]); 
        } else {
          setMovies(results);
        }
      } catch (error) {
        alert(error.message);
        setMovies([]);
      }
    };
       getMovie();
  }, [searchParams]);

  
  const handleSubmit = query => {
    setSearchParams({ query }); 
  };

  return (
    <main>
      <StyledSection>
        <SectionTitle>Search Movies</SectionTitle>
        <SearchMovies onSubmit={handleSubmit} /> 
       <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
        <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </StyledSection>
    </main>
  );
};

export default Movies;
