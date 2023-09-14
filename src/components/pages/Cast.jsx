import React, { useEffect, useState } from "react";
import { getMovieCredits } from "api/api";
import styled from './Cast.module.css'

const Cast = ({movieId}) => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId)
      .then((movieCredits) => {
        setMovieCredits(movieCredits);
      })
      .catch((error) => {
        setError('Error fetching movie credits: ' + error.message);
      });
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!movieCredits.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styled.castContainer}>
      <h2>Cast</h2>
       {error ? (
        <p className={styled.error}>Error: {error}</p>
      ) : (
        <div className={styled.castList}>
          {movieCredits.map((actor) => (
            <div key={actor.id} className={styled.actorItem}>
              <img
            src={actor.profile_path ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`: 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg'}
            alt={actor.name}
            width={250}
      />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cast;