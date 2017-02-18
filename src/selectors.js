import { createSelector } from 'reselect';

// Select entities from state
const getResultMap = (state) => state.get('result');
const getGenresMap = (state) => state.getIn(['entities', 'genres']);
const getActorsMap = (state) => state.getIn(['entities', 'actors']);
const getMoviesMap = (state) => state.getIn(['entities', 'movies']);

// Select movie result from state 
const getResult = createSelector(
    getResultMap,
    (resultMap) => resultMap && resultMap.toArray()
);

// Select genres from state
const getGenres = createSelector(
    getGenresMap,
    (genresMap) => genresMap && genresMap.toJS()
);

// Select actors from state
const getActors = createSelector(
    getActorsMap,
    (actorsMap) => actorsMap && actorsMap.toJS()
);

// Select movies from state
const getMovies = createSelector(
    getMoviesMap,
    (moviesMap) => moviesMap && moviesMap.toJS()
);

// Select filter from state
const getFilter = (state) => state.get('filter').toJS();

// Select movie result list
// filter against selected filter in state
const getMoviesResult = createSelector(
    getResult,
    getMovies,
    getGenres,
    getActors,
    getFilter,
    (result, movies, genres, actors, filter) => {
        if (!result) return null;
        // filter results first
        return result.filter(movieId => {
            const movie = movies[movieId];
            return (
                (filter.genre === '' || movie.genres.includes(Number(filter.genre)))
                &&
                (filter.actor === '' || movie.actors.includes(Number(filter.actor)))
            );
        })
        // return movie results with actos and genres
        .map(movieId => {
            const movie = movies[movieId];
            return {
                ...movie,
                actors: movie.actors.map(actorId => actors[actorId]),
                genres: movie.genres.map(genreId => genres[genreId])
            };
        });
    }
);

export {
    getGenres,
    getActors,
    getMoviesResult,
    getFilter
};
