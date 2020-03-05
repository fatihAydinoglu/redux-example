import { Map } from 'immutable';
import { createSelector } from 'reselect';

// Select entities from state
const getResult = state => state.get('result');
const getGenres = state => state.getIn(['entities', 'genres']);
const getActors = state => state.getIn(['entities', 'actors']);
const getMovies = state => state.getIn(['entities', 'movies']);
// Select filter from state
const getFilter = state => state.get('filter');

// Select movie result list
// filter against selected filter in state
const getMoviesResult = createSelector(
  getResult,
  getMovies,
  getGenres,
  getActors,
  getFilter,
  (result, movies, genres, actors, filter) => {
    if (!result || result.size === 0) return null;
    return (
      result
        // filter results first
        .filter((movieId) => {
          const movie = movies.get(movieId.toString());
          const genre = filter.get('genre');
          const actor = filter.get('actor');
          return (
            (genre === '' || movie.get('genres').includes(Number(genre))) &&
            (actor === '' || movie.get('actors').includes(Number(actor)))
          );
        })
        // return movie results with actors and genres
        .map((movieId) => {
          const movie = movies.get(movieId.toString());
          const movieResultItemMap = Map({
            movie,
            title: movie.get('title'),
            actors: movie.get('actors').map(actorId => actors.get(actorId.toString())),
            genres: movie.get('genres').map(genreId => genres.get(genreId.toString())),
          });
          return movieResultItemMap;
        })
    );
  },
);

export { getGenres, getActors, getMoviesResult, getFilter };
