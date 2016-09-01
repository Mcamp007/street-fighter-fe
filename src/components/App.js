import React, { Component } from 'react';
import GameBoard from './GameBoard';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <GameBoard />
      </div>
    );
  }
}

export default App;
