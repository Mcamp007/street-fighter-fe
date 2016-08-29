import React, { Component } from 'react';
import SpriteAnimator from 'react-sprite-animator';

class PlayerOne extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount (){
    window.addEventListener('keyup', this.handleStop.bind(this, event), false)
    window.addEventListener('keydown', this.movement.bind(this, event), false)
  }
  handleStop() {
    // console.log(event);
    if(event.keyCode === 80) {
      this.props.punch(true, false, "player-1")
    }
  }

  movement() {
    const currentMargin = this.props.moveStates.marginP1
    const currentLocation = this.props.moveStates.p1Location
    if( event.keyCode === 68 && this.props.moveStates.p1Location + 1 !== this.props.moveStates.p2Location) {
      this.props.moveForward(14.8, 1, "player-1");
    }
    if( event.keyCode === 65 && this.props.moveStates.p1Location > 0) {
      this.props.moveBackward(14.8, 1, "player-1")
    }
    if(event.keyCode === 80) {
      this.props.punch(false, true, "player-1")
    }

    console.log(this.props.moveStates.p1Location, this.props.moveStates.p2Location);

    if (this.props.moveStates.p1Location + 1 === this.props.moveStates.p2Location){
          // console.log("can loose hp");
      if(event.keyCode === 80) {
              console.log("lost HP through punch");
      }
      else if (event.keyCode === 75) {
        console.log("lost HP through kick");
      }
    }
  }



 render () {
   const {standingMovP1} = this.props.moveStates
   const {punchMovP1} = this.props.moveStates
   const leftMargin = {
     marginLeft: this.props.moveStates.marginP1 + 'vw'
   };

   const standingMovementP1 = (
     <div className="leftMargin">
       <div style={leftMargin}>
         <SpriteAnimator
           ref='sprite'
           width={93.5}
           height={108}
           sprite='../src/standingmovP1.svg'
           shouldAnimate={standingMovP1}
           fps={6}
           startFrame={0}
           stopLastFrame={false}
           reset={!standingMovP1}
         />
       </div>
     </div>
   )
   const punchMovementP1 = (
     <div className="leftMargin">
       <div style={leftMargin}>
         <SpriteAnimator
           ref='sprite'
           width={73}
           height={108}
           sprite='../src/punchP1.svg'
           shouldAnimate={punchMovP1}
           fps={40}
           startFrame={0}
           stopLastFrame={true}
           reset={!punchMovP1}
         />
       </div>
     </div>
   )


   return (
    <div>
    <h1>I am player one </h1>
      <div className="container_p1">
        {this.props.moveStates.punchMovP1 === true ? punchMovementP1 : standingMovementP1}
      </div>
    </div>
   )
 }
}

export default PlayerOne;
