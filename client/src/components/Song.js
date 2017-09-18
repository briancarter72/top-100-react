import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },

  pointer: {
    cursor: 'pointer',
    color: 'red'
  }
}

const Song = ({ id, complete, name, updateSong, deleteSong }) => (
  <div className="col s12">
    <div className="col s8">
      <span style={ complete ? styles.complete : {} } className="center">
        { name }
      </span>
    </div>

    <div className="col s2">
      <input
        id={`song-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateSong(id)}
      />
      <label htmlFor={`song-${id}`}>Favorite</label>
    </div>

    <div style={ styles.pointer } onClick={ () => deleteSong(id) } className="col s2">
      X
    </div>
  </div>
)

export default Song;
