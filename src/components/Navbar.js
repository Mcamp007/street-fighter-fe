import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../styling/Navbar.css';
import {Link} from 'react-router'

export default class AppNavbar extends Component {
  render() {
    return (
      <div>
      <Navbar id="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React Fighter</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <Link to='/gameboard'><NavItem>Game</NavItem></Link>
          <Link to='/highscores'><NavItem>highscores</NavItem></Link>
          <Link to='/about'><NavItem>About</NavItem></Link>
        </Nav>
      </Navbar>
      </div>
    )
  }
}
