import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "api/api";
import { NavLink } from "react-router-dom";
import styled from './MoviesList.module.css'

const MoviesList = () => {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
    
    useEffect(() => {
        getTrendingMovies().then((movies) => {
            setMovies(movies);
    }).catch((error) => {
        setError('Error fetching trending movies: ' + error.message);
      });
  }, []);
    return (
        <div className={styled.moviesListContainer}>
            {error && <div>{error}</div>}

            <h1>Trending Today</h1>
            <ul className={styled.movieList}>
                {movies.map((movie) => (
                    <li className={styled.movieItem} key={movie.id}>
                        <NavLink className={styled.movieLink} to={`/movies/${movie.id}`}>{movie.title ? movie.title : movie.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;