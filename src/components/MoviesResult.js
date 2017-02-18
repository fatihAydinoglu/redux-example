import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import { getMoviesResult } from '../selectors';
import MoviesResultItem from './MoviesResultItem';

// Connected Movies Result Component
// Fetches movie result
class MoviesResult extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Get movies
        this.props.fetchMovies();
    }

    render() {
        const { moviesResult } = this.props;
        // If not initialized
        if (!moviesResult) return null;
        // If no result against filter
        if(moviesResult.length === 0) return <h1>No Result</h1>;
        return (
            <div>
                <h1>Movies</h1>
                <ul>
                    {moviesResult.map(movie =>
                        <MoviesResultItem key={movie.id} movie={movie} />
                    )}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        moviesResult: getMoviesResult(state)
    };
}

// connect to redux
export default connect(mapStateToProps, {
    fetchMovies,
})(MoviesResult);