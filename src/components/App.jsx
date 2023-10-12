import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
// import { HomePage } from '../pages/HomePage/HomePage';
// import { MoviesPage } from '../pages/MoviesPage/MoviesPage';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
