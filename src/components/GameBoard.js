import React, { Component } from 'react';
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
      duckMovP1: false,
      jumpMovP1: false,
      hadoukenMovP1: false,
      hadoukenBallP1: false,
      hadoukenBallPosP1: 0,
      hadoukenBallMarginP1: 0,
      ballVisibility: "hidden",
      standingMovP2: true,
      punchMovP2: false,
      duckMovP2: false
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
        p2Location: this.state.p2Location + position,
      })
    }
  }
  punch(standingMov, punchMov, player) {
    if(player === "player-1") {
      this.setState({
        standingMovP1: standingMov,
        punchMovP1: punchMov
      })
    } else {
      this.setState({
        standingMovP2: standingMov,
        punchMovP2: punchMov
      })
    }
  }

  duck(standingMov, duckMov, player) {
    if(player === 'player-1'){
      this.setState({
        standingMovP1: standingMov,
        duckMovP1: duckMov
      })
    } else {
      this.setState({
        standingMovP2: standingMov,
        duckMovP2: duckMov
      })
    }
  }

  jump(standingMov, jumpMov, player) {
    if(player === 'player-1') {
      this.setState({
        standingMovP1: standingMov,
        jumpMovP1: jumpMov
      })
    } else {
      console.log("ufckyou")
    }
  }

  hadouken(standingMov, hadoukenMov, hadoukenBall, ballVisibility, ballMargin, player) {
    if(player === 'player-1') {
      console.log("hadouken")
      this.setState({
        standingMovP1: standingMov,
        hadoukenMovP1: hadoukenMov,
        hadoukenBallP1: hadoukenBall,
        ballVisibility: ballVisibility,
        hadoukenBallMarginP1: this.state.hadoukenBallMarginP1 + ballMargin,
        hadoukenBallPosP1: this.state.hadoukenBallPosP1 + 1
      })
    }
  }

  ballMove(number) {
    this.setState({
      hadoukenBallMarginP1: this.state.hadoukenBallMarginP1 + 10,
      hadoukenBallPosP1: this.state.hadoukenBallPosP1 + number
    })
  }

  reset() {
    this.setState({
      hadoukenBallMarginP1: 0,
      hadoukenBallPosP1: this.state.p1Location
    })
  }

  render() {
// console.log("standing move", this.state.standingMov, "punchMov", this.state.punchMov);
    return (
      <div>
        <PlayerOne moveStates={this.state} moveForward={this.moveForward.bind(this)}
                                           moveBackward={this.moveBackward.bind(this)}
                                           punch={this.punch.bind(this)}
                                           duck={this.duck.bind(this)}
                                           jump={this.jump.bind(this)}
                                           hadouken={this.hadouken.bind(this)}
                                           ballMove={this.ballMove.bind(this)}
                                           reset={this.reset.bind(this)}
        />
        <PlayerTwo moveStates={this.state} moveForward={this.moveForward.bind(this)}
                                           moveBackward={this.moveBackward.bind(this)}
                                           punch={this.punch.bind(this)}
                                           duck={this.duck.bind(this)}
        />
      </div>
    );
  }
}
export default App;
{/*window.removeEventListener('resize', this.handleResize);*/}
