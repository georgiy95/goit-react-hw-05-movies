import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Reviews.module.css';
import { fetchMoviesReviews } from 'api/Api';

const Reviews = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMoviesReviews(id);
        setMovieInfo(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      {movieInfo.length !== 0 && (
        <ul className={css.reviewList}>
          {movieInfo?.map(el => {
            return (
              <li key={el.id} className={css.reviewItem}>
                <h3 className={css.authorName}>Author: {el.author_details.username}</h3>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {movieInfo.length === 0 && (
        <div>Sorry, there are no reviews for this movie</div>
      )}
    </>
  );
};
export default Reviews;
