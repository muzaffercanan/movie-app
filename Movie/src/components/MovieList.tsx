import React from 'react';
import { Link } from 'react-router-dom';

const MovieList: React.FC<{ movies: any[] }> = ({ movies }) => (
  <div className='listing-page'>
    {movies.map((movie) => (
      <div key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          {movie.poster_path === null ? (
            <img src='https://via.placeholder.com/200x269' alt={movie.title} />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <h3>{movie.title}</h3>
        </Link>
      </div>
    ))}
  </div>
);

export default MovieList;
