import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import HighScores from './components/Highscores.js'
import GameBoard from './components/GameBoard.js'
import About from './components/About.js'
import Home from './components/Home.js'
import './styling/index.css';
import { browserHistory, Route, Router } from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path='/home' component={Home} />
      <Route path="/highscores" component={HighScores}/>
      <Route path="/gameboard" component={GameBoard}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
,document.getElementById('root')
);
