import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/movieService';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {movie.poster_path === null ? (
        <img src='https://via.placeholder.com/200x269' alt={movie.title} />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <p>Year: {movie.release_date}</p>
      <p>Genre: {movie.genres.map((genre: any) => genre.name).join(', ')}</p>
    </div>
  );
};

export default MovieDetail;
