import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/api';
import Cast from './Cast';
import Reviews from './Reviews';
import styled from './MovieDetails.module.css'

const MovieDetails = () => {
  const { movieId } = useParams(); 
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [error, setError] = useState(null);


  const location = useLocation();
  const navigate = useNavigate();

  
  useEffect(() => {
    getMovieDetails(movieId)
    .then((moviesDetails) => {
      setMoviesDetails(moviesDetails);
      })
      .catch((error) => {
        setError('Error fetching movie details: ' + error.message);
      });
  }, [movieId]);

  
  if (!moviesDetails) {
    return <div>Loading...</div>;
  }
  
  if (error) {
     return <div>{error}</div>;
   }
   
   const voteAverage = moviesDetails.vote_average;
   const percentLiked = voteAverage ? (voteAverage / 10) * 100 : null;
   
   const onGoBackClick = () => {
     if (location.pathname.includes('/movies')) {
       navigate(-1);
     } else {
       navigate('/');
     }
  };
  
  return (
    <div className={styled.moviesDetailsContainer}>
      <button type='button' className={styled.btn} onClick={onGoBackClick} >
        Go back
      </button>
      <div className={styled.wrapper}>
      <img
        src={moviesDetails.poster_path ? `https://image.tmdb.org/t/p/w500/${moviesDetails.poster_path}` : 'https://pixabay.com/get/gd15a64a0946404c26e64ae5f9341e3c314f3651c4daf118c426cbd529dd7056b94aec049dd059efc3495f8c71bde104c_640.jpg'}
        width={250}
        alt="poster"
        />
        <div className={styled.movieInfo}>
      <h2>{moviesDetails.title ? moviesDetails.title : moviesDetails.name}</h2>
      <p>User Score: {Math.round(percentLiked)} %</p>
      <div>
        <h2>Overview</h2>
        <p>{moviesDetails.overview}</p>
      </div>
      <div>
        <h2>Genres</h2>
        <p>
          {moviesDetails.genres &&
            moviesDetails.genres.map((genre) => {
              return genre.name;
            }).join(' ')}
            </p>
            </div>
          </div>
      </div>
      <div className={styled.additionalInfo}>
        <h2>Additional information</h2>
        <ul className={styled.list}>
          <li><NavLink className={styled.listItem} to={`/movies/${movieId}/cast`}>Cast</NavLink></li>
          <li><NavLink className={styled.listItem} to={`/movies/${movieId}/reviews`}>Reviews</NavLink></li>
        </ul>
      </div>
      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </div>
  );
}

export default MovieDetails;