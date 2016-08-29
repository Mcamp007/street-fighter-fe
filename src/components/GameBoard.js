import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styling/movement.css';
import SpriteAnimator from 'react-sprite-animator'
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';


///////////////////////////////////////use the function that we learned during splits, the one that is realted to state
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      marginP1: 0,
      marginP2: 0,
      locationArr: [0,1,2,3,4,5,6,7],
      p1Location: 0,
      p2Location: 0,
      standingMovP1: true,
      punchMovP1: false,
      standingMovP2: true,
      punchMovP2: false
    }
  }

  componentDidMount() {
      this.setState({p1Location: this.state.locationArr[0],
                    p2Location: this.state.locationArr[this.state.locationArr.length - 1]
      })
      // this.setState({standingMov: true})
   }

  moveForward(number, position, player) {
    if(player === "player-1") {
    this.setState({
      marginP1: this.state.marginP1 + number,
      p1Location: this.state.p1Location + position
    })
  } else {
    this.setState({
      marginP2: this.state.marginP2 + number,
      p2Location: this.state.p2Location - position
    })
  }
  }

  moveBackward(number, position, player) {
    if(player === "player-1") {
      this.setState({
        marginP1: this.state.marginP1 - number,
        p1Location: this.state.p1Location - position
      })
    } else {
      this.setState({
        marginP2: this.state.marginP2 - number,
        p2Location: this.state.p2Location + position
      })
    }
  }

  punch(standingMov, punchMov, player) {
    if(player === "player-1") {
      this.setState({
        standingMovP1: standingMov,
        punchMovP1: punchMov
      })
    }
  }


  render() {
// console.log("standing move", this.state.standingMov, "punchMov", this.state.punchMov);
    return (
      <div>
        <PlayerOne moveStates={this.state} moveForward={this.moveForward.bind(this)}
                                           moveBackward={this.moveBackward.bind(this)}
                                           punch={this.punch.bind(this)}
        />
        <PlayerTwo moveStates={this.state} moveForward={this.moveForward.bind(this)}
                                           moveBackward={this.moveBackward.bind(this)}

        />
      </div>
    );
  }
}

export default App;

{/*window.removeEventListener('resize', this.handleResize);*/}
