import moviesResult from './mockResponse/moviesResult'; // mock result
import movieNormalizer from './movieNormalizer';

// Fetch movies
const fetchMovies = () => ({
    type: 'FETCH_MOVIES',
    payload: movieNormalizer(moviesResult) // normalize result
});

// Set selected filter
const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
});

export {
    fetchMovies,
    setFilter
};
