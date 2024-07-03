import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { searchMovies } from '../services/movieService';
import { Pagination, PaginationProps } from 'antd';

const ListingPage: React.FC = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(1);
  const [movies, setMovies] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState();
  // const [totalResults, setTotalResults] = useState<any[]>();

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  useEffect(() => {
    console.log('location', location);
    const query = new URLSearchParams(location.search).get('query');

    if (query) {
      const fetchMovies = async () => {
        const { results, totalPages } = await searchMovies(query, current);
        setMovies(results);
        setTotalPages(totalPages);
        // setTotalResults(totalResults);
      };
      fetchMovies();
    }
  }, [location, current]);

  return (
    <div className='container'>
      <div className='list-header'>
        <h1>Film Listesi</h1>

        <Pagination
          onChange={onChange}
          defaultCurrent={current}
          total={totalPages}
          showSizeChanger={false}
        />
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default ListingPage;
