import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(el => (
      <li key={el.id}>
        <NavLink className={css.item} to={`/movies/${el.id}`} state={{ from: location }}>
        {el.title ? el.title : el.name}
        </NavLink>
      </li>
    ))}
  </ul>
  );
};

