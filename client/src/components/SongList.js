import React from 'react';
import Song from'./Song';

const SongList = ({ songs, updateSong, deleteSong }) => (
  <div className="row">

    { songs.map( song =>
        <Song
          key={song.id}
          updateSong={updateSong}
          deleteSong={deleteSong}
          // editSong={editSong}
          {...song}
        />
      )
    }
  </div>

)

export default SongList;
