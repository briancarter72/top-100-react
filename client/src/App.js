import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import axios from 'axios';


class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    axios.get('/api/songs')
      .then( res => this.setState({ songs: res.data }) )
  }

  addSong = (name) => {
    const { songs } = this.state;
    axios.post('/api/songs', { song: { name }} )
      .then( res => {
        this.setState({ songs: [res.data, ...songs] })
      })
  }

  updateSong = (id) => {
    //SONG update song in db
    axios.put(`/api/songs/${id}`)
      .then( res => {
        let songs = this.state.songs.map( song => {
          if (song.id === id)
            return res.data
          return song
        });

        this.setState({ songs })
      })
  }

  deleteSong = (id) => {
    //SONG remove song from db
    const { songs } = this.state;
    axios.delete(`/api/songs/${id}`)
      .then( res => {
        this.setState({ songs: songs.filter( t => t.id !== id ) })
      })
  }

  render() {
    return (
      <div className="container">
        <SongForm addSong={this.addSong} />
        <SongList
          songs={this.state.songs}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
        />
      </div>
    );
  }
}

        // <div className="container">
        //
        //   <h2>Welcome to React</h2>
        // </div>
    // );
  // }
// }

export default App;
