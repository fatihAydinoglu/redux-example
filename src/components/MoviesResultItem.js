import React from 'react';
import MovieGenres from './MovieGenres';
import MovieActors from './MovieActors';

// Movie result item
const MoviesResultItem = ({ movie }) => (
  <li>
    <h2>{movie.get('title')}</h2>
    <MovieGenres genres={movie.get('genres')} />
    <MovieActors actors={movie.get('actors')} />
  </li>
);

export default MoviesResultItem;
