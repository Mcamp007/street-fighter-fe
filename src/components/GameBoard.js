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

<<<<<<< HEAD

    if(event.keyCode === 80) {
        this.setState({ standingMov: false,
                        punchMov: true
        })
    }

    console.log(this.state.p1Location, this.state.p2Location);
    // console.log(this.state.marginP2);
    // if (this.state.p1Location + 1 === this.state.p2Location && this.state.punchMov === true){ //might need this later
    if (this.state.p1Location + 1 === this.state.p2Location){


      if(event.keyCode === 80) {
              console.log("lost HP through punch");
      }
      else if (event.keyCode === 75) {
        console.log("lost HP through kick");
      }
=======
  punch(standingMov, punchMov, player) {
    if(player === "player-1") {
      this.setState({
        standingMovP1: standingMov,
        punchMovP1: punchMov
      })
>>>>>>> 59dd798e6ffe904dbc65370dfe2af3cf5e0fda9d
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
