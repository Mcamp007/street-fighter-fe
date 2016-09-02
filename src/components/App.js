import React, { Component } from 'react';
import GameBoard from './GameBoard';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../styling/Navbar.css';
import { Link } from 'react-router';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar id="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/home'>React Fighter</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem><Link to='/gameboard'>Game</Link></NavItem>
            <NavItem><Link to='/highscores'>Highscores</Link></NavItem>
            <NavItem><Link to='/about'>About</Link></NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
