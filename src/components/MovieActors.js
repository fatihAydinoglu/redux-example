import React from 'react';

// displays movie actors
const MovieActors = ({actors}) => {
    // If not initialized
    if (!actors) return null;
    return (
        <div>
            <b>Stars: </b>
            {actors.map((actor, index) =>
                <span key={actor.id}>
                    {actor.name}
                    {index !== (actors.length - 1) ? ', ' : ''}
                </span>
            )}
        </div>
    );
};

export default MovieActors;
