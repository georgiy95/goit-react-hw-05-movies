import { getMovieReviewsAxios } from 'api/fetchData';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsAxios(movieId).then(setReviews);
  }, [movieId]);
  if (!reviews) return null;

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'Sorry, there are no reviews for this movie'
      )}
    </>
  );
};

export default Reviews;
