import React from 'react';
import MovieGenres from './MovieGenres';
import MovieActors from './MovieActors';

// Movie result item
const MoviesResultItem = ({ movie }) => (
    <li>
        <h2>{movie.title}</h2>
        <MovieGenres genres={movie.genres} />
        <MovieActors actors={movie.actors} />
    </li>
);

export default MoviesResultItem;
