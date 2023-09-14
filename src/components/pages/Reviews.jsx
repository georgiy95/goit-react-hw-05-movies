import React, { useEffect, useState } from 'react';
import { getMovieReviews } from '../../api/api'
import styled from './Reviews.module.css'

const Reviews = ({movieId }) => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovieReviews(movieId)
      .then((movieReviews) => {
        setMovieReviews(movieReviews);
      })
      .catch((error) => {
        setError('Error fetching trending movies: ' + error.message);
      });
  }, [movieId]);
  
 return (
    <div className={styled.reviewsContainer}>
      {movieReviews.length > 0 ? (
        <ul className={styled.reviewList}>
          {movieReviews.map((author) => (
            <li key={author.id} className={styled.reviewItem}>
              <h2 className={styled.authorName}>{author.author}</h2>
              <p className={styled.reviewContent}>{author.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styled.noReviews}>
          {error ? `Error: ${error}` : "We don't have any reviews for this movie."}
        </p>
      )}
    </div>
  );
}
export default Reviews;