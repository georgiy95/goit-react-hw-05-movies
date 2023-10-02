import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Header.module.css';

export const Header = () => (
  <>
    <header>
    <nav className={css.navigation}>
        <NavLink className={({ isActive }) =>
            isActive ? [css.link, css.active].join(' ') : css.link} to="/">Home
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? [css.link, css.active].join(' ') : css.link} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  </>
);
