import { schema, normalize } from 'normalizr';

// schema definitions
const actor = new schema.Entity('actors');
const genre = new schema.Entity('genres');
const movie = new schema.Entity('movies', {
  genres: [genre],
  actors: [actor],
});
const movieList = [movie];

// Converts moviesResult to normalizedMoviesResult
const movieNormalizer = moviesResult => normalize(moviesResult, movieList);

export default movieNormalizer;
