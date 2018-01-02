import React, { Component } from 'react';

// Filters movie actors
class MovieActorsFilter extends Component {
  constructor(props) {
    super(props);
    this.handleActorFilterChange = this.handleActorFilterChange.bind(this);
  }

  handleActorFilterChange(e) {
    this.props.onSelect(e.currentTarget.value);
  }

  render() {
    const { actors, selected } = this.props;
    // If not initialized
    if (!actors) return null;
    return (
      <div>
        <b>Actor:</b>
        <span>
          <input
            type="radio"
            name="actorFilter"
            value=""
            checked={selected === ''}
            onChange={this.handleActorFilterChange}
          />
          All{' '}
        </span>
        {actors.keySeq().map(id => (
          <span key={id}>
            <input
              type="radio"
              name="actorFilter"
              value={id}
              checked={selected === id}
              onChange={this.handleActorFilterChange}
            />
            {actors.getIn([id, 'name'])}{' '}
          </span>
        ))}
      </div>
    );
  }
}

export default MovieActorsFilter;
