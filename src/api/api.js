// a4d1120350c665aad10b441227c13583

import axios from "axios";
const API_KEY = 'a4d1120350c665aad10b441227c13583'

async function getTrendingMovies() {
    try {
      const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      return [];
    }
  }
  
  async function searchMovies(query, page = 1) {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  }
  
  async function getMovieDetails(movieId) {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  }
  
  async function getMovieCredits(movieId) {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data.cast;
    } catch (error) {
      console.error('Error fetching movie credits:', error);
      return [];
    }
  }
  
  async function getMovieReviews(movieId) {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
      return [];
    }
  }
  
  export {
    getTrendingMovies,
    searchMovies,
    getMovieDetails,
    getMovieCredits,
    getMovieReviews,
  };