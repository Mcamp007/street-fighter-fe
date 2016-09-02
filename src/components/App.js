import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../styling/Navbar.css';
import { Link } from 'react-router';
import '../styling/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logo: ""
    }
  }

  onGameStart(event) {
    this.setState({
      logo: "hide-cover"
    })
  }

  onHighScores(event) {
    this.setState({
      logo: "hide-cover"
    })
    console.log(this.state.logo)
  }

  onLogo(event) {
    this.setState({
      logo: "show-cover"
    })
  }
  render() {
    return (
      <div>
        <Navbar id="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link onClick={(event) => this.onLogo(event)} to='/'>React Fighter</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem><Link onClick={(event) => this.onGameStart(event)} to='/gameboard'>Game</Link></NavItem>
            <NavItem><Link onClick={(event) => this.onHighScores(event)} to='/highscores'>Highscores</Link></NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
        <div className={this.state.logo}>
        <img src='http://i65.tinypic.com/5x2b11.jpg' role="presentation"></img>
        </div>
      </div>
    );
  }
}

export default App;
