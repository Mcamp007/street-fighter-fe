import React, { Component } from 'react';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import '../styling/GameBoard.css';
import HPOne from './HPOne';
import HPTwo from './HPTwo';
import Win from './CheckWin';
import Timer from './Timer.js'

///////////////////////////////////////use the function that we learned during splits, the one that is realted to state
class GameBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      marginP1: 0,
      marginP2: 0,
      locationArr: [],
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
      playerOneHP: 100,
      standingMovP2: true,
      punchMovP2: false,
      duckMovP2: false,
      jumpMovP2: false,
      hadoukenMovP2: false,
      hadoukenBallP2: false,
      hadoukenBallPosP2: 0,
      hadoukenBallMarginP2: 0,
      ballVisibilityP2: "hidden",
      playerTwoHP: 100,
      marginBottomP1: 0,
      marginBottomP2: 0,
      hadoukenAllowance: true,
      hadoukenAllowanceP2: true,
      blockMovP1: false,
      blockMovP2: false,
      blockAllowanceP1: true,
      blockAllowanceP2: true,
      kickMovP1: false,
      kickMovP2: false,
      duckAllowanceP1: true,
      duckAllowanceP2: true,
      timer: 120,
      p1Status: null,
      p2Status: null
    }

    for (let i = 0; i < 27; i++) {
      this.state.locationArr.push(i)
    }
  }
  componentDidMount() {
      this.setState({p1Location: this.state.locationArr[8],
                    p2Location: this.state.locationArr[this.state.locationArr.length - 8],
                    marginP1: 27.2,
                    marginP2: 27.2,
      })
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
  punch(standingMov, punchMov, damage, player) {
    if(player === "player-1") {
      this.setState({
        standingMovP1: standingMov,
        punchMovP1: punchMov,
        playerTwoHP: this.state.playerTwoHP - damage
      })
      if (this.state.playerTwoHP <= 0){
        this.setState({
          playerTwoHP: 0
        })
      }
    } else {
      this.setState({
        standingMovP2: standingMov,
        punchMovP2: punchMov,
        playerOneHP: this.state.playerOneHP - damage
      })
      if (this.state.playerOneHP <= 0){
        this.setState({
          playerOneHP: 0
        })
      }
    }
  }
  kick(standingMov, kickMov, damage, player){
    if(player === 'player-1'){
      console.log('Gameboard');
      this.setState({
        standingMovP1: standingMov,
        kickMovP1: kickMov,
        playerTwoHP: this.state.playerTwoHP - damage
      })
      if (this.state.playerTwoHP <= 0){
        this.setState({
          playerTwoHP: 0
        })
      }
    }
    else {
      this.setState({
        standingMovP2: standingMov,
        kickMovP2: kickMov,
        playerOneHP: this.state.playerOneHP - damage
      })
      if (this.state.playerOneHP <= 0){
        this.setState({
          playerOneHP: 0
        })
      }
    }
  }

  duck(standingMov, duckMov, duckAllowance, player) {
    if(player === 'player-1'){
      this.setState({
        standingMovP1: standingMov,
        duckMovP1: duckMov,
        duckAllowanceP1: duckAllowance
      })
    } else {
      this.setState({
        standingMovP2: standingMov,
        duckMovP2: duckMov,
        duckAllowanceP2: duckAllowance
      })
    }
  }

  jump(standingMov, jumpMov, marginB, player) {
    if(player === 'player-1') {
      this.setState({
        standingMovP1: standingMov,
        jumpMovP1: jumpMov,
        marginBottomP1: marginB
      })
    } else if(player === 'player-2') {
      this.setState({
        standingMovP2: standingMov,
        jumpMovP2: jumpMov,
        marginBottomP2: marginB
      })
    }
  }

  hadouken(standingMov, hadoukenMov, hadoukenBall, ballVisibility, ballMargin, hadoukenAllowance, damage, player) {
    if(player === 'player-1') {
      console.log("hadouken")
      this.setState({
        standingMovP1: standingMov,
        hadoukenMovP1: hadoukenMov,
        hadoukenBallP1: hadoukenBall,
        ballVisibility: ballVisibility,
        hadoukenAllowance: hadoukenAllowance,
        hadoukenBallMarginP1: this.state.marginP1,
        hadoukenBallPosP1: this.state.p1Location,
        playerTwoHP: this.state.playerTwoHP - damage
      })
      if (this.state.playerTwoHP <= 0){
        this.setState({
          playerTwoHP: 0
        })
      }
    } else {
      this.setState({
        standingMovP2: standingMov,
        hadoukenMovP2: hadoukenMov,
        hadoukenBallP2: hadoukenBall,
        ballVisibilityP2: ballVisibility,
        hadoukenAllowanceP2: hadoukenAllowance,
        hadoukenBallMarginP2: this.state.marginP2,
        hadoukenBallPosP2: this.state.p2Location,
        playerOneHP: this.state.playerOneHP - damage
      })
    }
    if (this.state.playerOneHP <= 0){
      this.setState({
        playerOneHP: 0
      })
    }
  }

  block(blockMov,player) {
    if(player === 'player-1') {
      console.log(blockMov);
      this.setState({
        blockMovP1: blockMov,
        blockAllowanceP1: true
      })
      if (this.state.playerTwoHP <= 0){
        this.setState({
          playerTwoHP: 0
        })
      }
    } else {
      this.setState({
        blockMovP2: blockMov,
        blockAllowanceP2: true
      })
      if (this.state.playerOneHP <= 0){
        this.setState({
          playerOneHP: 0
        })
      }
    }
  }

  ballMove(number, player) {
    if(player === "player-1") {
    this.setState({
      hadoukenBallMarginP1: this.state.hadoukenBallMarginP1 + 3.4,
      hadoukenBallPosP1: this.state.hadoukenBallPosP1 + number
    })
  } else {
    this.setState({
      hadoukenBallMarginP2: this.state.hadoukenBallMarginP2 + 3.4,
      hadoukenBallPosP2: this.state.hadoukenBallPosP2 - number
    })
  }
  }

  reset(identifier) {
    if(identifier === 'hadoukenBall') {
    this.setState({
      hadoukenBallMarginP1: this.state.marginP1,
      hadoukenBallPosP1: this.state.p1Location,
      ballVisibility: "hidden"
    })
    } else if (identifier === 'hadoukenAllowance'){
      this.setState({
        hadoukenAllowance: true
      })
    } else if (identifier === 'blockAllowanceP1') {
      this.setState({
        blockAllowanceP1: true,
        blockMovP1: false
      })
    } else if (identifier === 'blockAllowanceP2') {
      this.setState({
        blockAllowanceP2: true,
        blockMovP2: false
      })
    } else if(identifier === 'hadoukenBallP2') {
      this.setState({
        hadoukenBallMarginP2: this.state.marginP2,
        hadoukenBallPosP2: this.state.p2Location,
        ballVisibilityP2: "hidden"
      })
    } else if(identifier === 'hadoukenAllowanceP2') {
      this.setState({
        hadoukenAllowanceP2: true
      })
    }
  }

  timer(number) {
    this.setState({
      timer: this.state.timer - number
    })
  }

deadOrAlive (status, player){
  console.log('dead or alloiiiiveeee');
  if(player === 'player-1'){
    this.setState({
      p1Status: status
    })
  }
  else {
    this.setState({
      p2Status: status
    })
  }

}


  render() {
// console.log("standing move", this.state.standingMov, "punchMov", this.state.punchMov);
    return (
      <div>
        <img className="gameboard-bg" src="../src/background.gif" role="presentation"></img>
        <PlayerOne moveStates={this.state} moveForward={this.moveForward.bind(this)}
                                           moveBackward={this.moveBackward.bind(this)}
                                           punch={this.punch.bind(this)}
                                           kick={this.kick.bind(this)}
                                           duck={this.duck.bind(this)}
                                           jump={this.jump.bind(this)}
                                           hadouken={this.hadouken.bind(this)}
                                           ballMove={this.ballMove.bind(this)}
                                           reset={this.reset.bind(this)}
                                           block={this.block.bind(this)}

        />
        <PlayerTwo moveStates={this.state} moveForward={this.moveForward.bind(this)}
                                           moveBackward={this.moveBackward.bind(this)}
                                           punch={this.punch.bind(this)}
                                           kick={this.kick.bind(this)}
                                           duck={this.duck.bind(this)}
                                           jump={this.jump.bind(this)}
                                           block={this.block.bind(this)}
                                           reset={this.reset.bind(this)}
                                           hadouken={this.hadouken.bind(this)}
                                           ballMove={this.ballMove.bind(this)}
        />
      <HPOne healthbar={this.state.playerOneHP}/>
      <HPTwo healthbar={this.state.playerTwoHP}/>
      <Timer timer={this.timer.bind(this)} time={this.state.timer}/>
      <Win deadOrAlive={this.deadOrAlive.bind(this)} time={this.state.timer} p1hp={this.state.playerOneHP} p2hp={this.state.playerTwoHP} />
      </div>
    );
  }
}
export default GameBoard;
