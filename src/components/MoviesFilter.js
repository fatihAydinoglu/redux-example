import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import { getGenres, getActors, getFilter } from '../selectors';
import MovieGenresFilter from './MovieGenresFilter';
import MovieActorsFilter from './MovieActorsFilter';

// Connected Movies Filter Component
// Handles set filter action
class MoviesFilter extends Component {
    constructor(props) {
        super(props);

        this.handleGenreSelect = this.handleGenreSelect.bind(this);
        this.handleActorSelect = this.handleActorSelect.bind(this);
    }

    handleGenreSelect(genre) {
        this.props.setFilter({ genre });
    }

    handleActorSelect(actor) {
        this.props.setFilter({ actor });
    }

    render() {
        const { genres, actors, filter } = this.props;
        return (
            <div>
                <h3>Filter Results</h3>
                <MovieGenresFilter
                    genres={genres}
                    selected={filter.genre}
                    onSelect={this.handleGenreSelect}
                />
                <MovieActorsFilter
                    actors={actors}
                    selected={filter.actor}
                    onSelect={this.handleActorSelect}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        genres: getGenres(state),
        actors: getActors(state),
        filter: getFilter(state)
    };
}

// connect to redux
export default connect(mapStateToProps, {
    setFilter
})(MoviesFilter);

