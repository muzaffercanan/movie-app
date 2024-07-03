import axios from 'axios';

const API_KEY = 'a6c31c324462ad0c5c8ae30cef973702';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query: string, page: any) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page
    }
  });

  return {
    results: response.data.results,
    totalResults: response.data.total_results,
    totalPages: response.data.total_pages
  };
};

export const getMovieDetails = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY
    }
  });
  return response.data;
};
