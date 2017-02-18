import React, { Component } from 'react';

// Filters movie genres
class MovieGenresFilter extends Component {
    constructor(props) {
        super(props);
        this.handleGenreFilterChange = this.handleGenreFilterChange.bind(this);
    }

    handleGenreFilterChange(e) {
        this.props.onSelect(e.currentTarget.value);
    }

    render() {
        const {genres, selected } = this.props;
        // If not initialized
        if (!genres) return null;
        return (
            <div>
                <b>Genre:</b>
                <span>
                    <input
                        type="radio"
                        name="genreFilter"
                        value=""
                        checked={selected === ''}
                        onChange={this.handleGenreFilterChange}
                    />
                    All
                    {' '}
                </span>
                {
                    Object.keys(genres).map(id => (
                        <span key={id}>
                            <input
                                type="radio"
                                name="genreFilter"
                                value={id}
                                checked={selected === id}
                                onChange={this.handleGenreFilterChange}
                            />
                            {genres[id].name}
                            {' '}
                        </span>
                    ))
                }
            </div>
        );
    }
}

export default MovieGenresFilter;
