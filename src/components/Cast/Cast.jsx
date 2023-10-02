import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesCast } from 'api/Api';
import css from './Cast.module.css';
const Cast = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMoviesCast(id);
        setMovieInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <ul className={css.list}>
      {movieInfo?.cast?.map(actor => {
        return (
          <li className={css.item} key={actor.id}>
            <img
            className={css.img}
              alt={actor.name}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                  : 'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png'
              }
            ></img>
            <p className={css.name}>{actor.name}</p>
            <p className={css.character}>Character: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
