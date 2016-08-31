import React, { Component } from 'react';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

///////////////////////////////////////use the function that we learned during splits, the one that is realted to state
class GameBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      marginP1: 0,
      marginP2: 0,
      locationArr: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
      p1Location: 0,
      p2Location: 0,
      standingMovP1: true,
      punchMovP1: false,
      duckMovP1: false,
      jumpMovP1: false,
      openP1: false,
      hadukenAllowance: true,
      hadukenBallMarginP1: 0,
      hadukenStartP1: false,
      hadukenCollisionP1: false,
      hadukenLocation: 0,
      hadukenMovementP1: false,
      standingMovP2: true,
      punchMovP2: false,
      duckMovP2: false,
      blockMovP1: false,
      blockMovP2: false,
      blockAllowanceP1: true,
      blockAllowanceP2: true
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

  hadukenMov(standingMov, hadukenMov, hadukenStart, hadukenAllowance,player){
    if(player === 'player-1'){
      this.setState({
        standingMovP1: standingMov,
        hadukenMovementP1: hadukenMov,
        hadukenStartP1: hadukenStart,
        hadukenLocation: this.state.p1Location,
        hadukenBallMarginP1: this.state.marginP1,
        hadukenAllowance: hadukenAllowance,

      })
    }
  }
  hadukenBall(number, position,player) {
    // console.log("in gameboard", this.state.hadukenBallMarginP1,this.state.hadukenLocation);
    if(player === 'player-1'){
      this.setState({
        hadukenBallMarginP1: this.state.hadukenBallMarginP1 + number,
        hadukenLocation: this.state.hadukenLocation + position
      })
    }
  }
  block(blockMov, player){
    if(player === 'player-1'){
      this.setState({
        blockMovP1: blockMov,
        blockAllowanceP1: true
      })
    }
      else {
        console.log("changing state of P2 bblokc", blockMov);
      this.setState({
        blockMovP2: blockMov,
        blockAllowanceP2: true
      })
    }
  }
  reset (identifier){
    // console.log("this is reset",this.state.hadukenBallMarginP1, this.state.hadukenLocation );
    if(identifier === 'hadukenBall'){
        this.setState({
          hadukenLocation: this.state.p1Location,
          hadukenBallMarginP1: this.state.marginP1
        })
      }

    else if (identifier === 'hadukenAllowance'){
      this.setState({
        hadukenAllowance: true,
      })
    }
    else if (identifier === 'blockAllowanceP1'){
      console.log("reset");
      this.setState({
        blockAllowanceP1: true,
        blockMovP1: false
      })

    }
    else if (identifier === 'blockAllowanceP2'){
      console.log("reset P2");
      this.setState({
          blockAllowanceP2: true,
          blockMovP2: false
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
                                           duck={this.duck.bind(this)}
                                           jump={this.jump.bind(this)}
                                           hadukenMov={this.hadukenMov.bind(this)}
                                           hadukenBall={this.hadukenBall.bind(this)}
                                           reset={this.reset.bind(this)}
                                           block={this.block.bind(this)}
        />
        <PlayerTwo moveStates={this.state} moveForward={this.moveForward.bind(this)}
                                           moveBackward={this.moveBackward.bind(this)}
                                           punch={this.punch.bind(this)}
                                           duck={this.duck.bind(this)}
                                           reset={this.reset.bind(this)}
                                           block={this.block.bind(this)}

        />
      </div>
    );
  }
}
export default GameBoard;
{/*window.removeEventListener('resize', this.handleResize);*/}
