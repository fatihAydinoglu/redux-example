import React from 'react';

// displays movie actors
const MovieActors = ({ actors }) => {
  // If not initialized
  if (!actors) return null;
  return (
    <div>
      <b>Stars: </b>
      {actors.map((actor, index) => (
        <span key={actor.get('id')}>
          {actor.get('name')}
          {index !== actors.size - 1 ? ', ' : ''}
        </span>
      ))}
    </div>
  );
};

export default MovieActors;
