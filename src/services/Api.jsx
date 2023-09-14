import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '6ba95f0150f62d59152211efe4d3b75b',
    language: 'en-US',
  },
});

export const fetchTrendMovies = async () => {
  const { data } = await api.get('/trending/movie/day');
  return data;
};

export const fetchMovieByKeyWord = async query => {
  const { data } = await api.get('/search/movie', {
    params: { query, page: 1, include_adult: false },
  });
  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await api.get(`/movie/${movieId}/credits`);
  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await api.get(`/movie/${movieId}/reviews`, { params: { page: 1 } });
  return data;
};
