import React from 'react';

// Display movie genres
const MovieGenres = ({genres}) => {
    // If not initialized
    if (!genres) return null;
    return (
        <div>
            <b>Genres: </b>
            {genres.map((genre, index) =>
                <span key={genre.id}>
                    {genre.name}
                    {index !== (genres.length - 1) ? ', ' : ''}
                </span>
            )}
        </div>
    );
};

export default MovieGenres;
