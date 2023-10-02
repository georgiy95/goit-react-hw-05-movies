import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies?.map(el => {
        if (el.name) {
          return (
            <li key={el.id}>
              <NavLink className={css.item} to={`/movies/${el.id}`} state={{ from: location }}>
                {el.name}
              </NavLink>
            </li>
          );
        } else {
          return (
            <li key={el.id}>
              <NavLink className={css.item} to={`/movies/${el.id}`} state={{ from: location }}>
                {el.title}
              </NavLink>
            </li>
          );
        }
      })}
    </ul>
  );
};
