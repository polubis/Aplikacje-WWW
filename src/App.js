import React, { Component } from 'react';
import MusicPlayer from './containers/MusicPlayer.jsx';
class App extends Component {
  render() {
    return (
      <div className="container">
        <MusicPlayer />
      </div>
    );
  }
}

export default App;
