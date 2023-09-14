import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { fetchMovieReviews } from '../../services/Api';
import {
  Author,
  NoReviews,
  Review,
  ReviewHeader,
  ReviewList,
  ReviewListItem,
  ReviewWrapper,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams(); 
  const [reviews, setReviews] = useState([]); 

useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ReviewWrapper>
      <ReviewHeader>Reviews</ReviewHeader>
      {reviews.length ? (
        <ReviewList className="reviews-container">
          {reviews.map(review => (
            <ReviewListItem className="review-card" key={review.id}>
              <Author>Author: {review.author}</Author>
              <Review>{review.content}</Review>
            </ReviewListItem>
          ))}
        </ReviewList>
      ) : (
        <NoReviews>
          We don't have any reviews for this movie.
        </NoReviews>
      )}
    </ReviewWrapper>
  );
};
export default Reviews;