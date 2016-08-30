import React, { Component } from 'react';
import SpriteAnimator from 'react-sprite-animator';
import '../styling/PlayerOne.css';


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
    if(event.keyCode === 83) {
      this.props.duck(true, false, "player-1")
    }
    const test = this.props
    if(event.keyCode === 87) {
      setTimeout(function(){
        test.jump(true, false, "player-1");
      }, 1200)
    }
  }



  movement() {
    // console.log(event);
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
    if(event.keyCode === 83){
      this.props.duck(false, true, "player-1")
    }
    if(event.keyCode === 87) {
      console.log("jumpp");
      this.props.jump(false, true, "player-1")

    }
    if(event.keyCode === 32){
      console.log("haduken Location", this.props.moveStates.hadukenLocation);
      this.props.hadukenMov(false, true,true, "player-1")
          const self = this
          if(this.props.moveStates.hadukenStartP1) {
            const interval = setInterval(function() {
              self.props.hadukenBall(10, 1, "player-1")
              console.log(self.props.moveStates.hadukenLocation);

              if (self.props.moveStates.hadukenLocation === 5){
                console.log("fuck u");
                clearInterval(interval)
                self.props.hadukenMov(true, false,false, "player-1")
                self.props.reset()
              }
            }, 70);
          }

    }

    console.log(this.props.moveStates.p1Location, this.props.moveStates.p2Location);

    if (this.props.moveStates.p1Location + 1 === this.props.moveStates.p2Location){
          // console.log("can loose hp");
      if(event.keyCode === 80) {
        console.log("P2 lost HP through punch");
      }
      else if (event.keyCode === 75) {
        console.log("P2 lost HP through kick");
      }
    }
  }

// componentDidMount(){
//   console.log(this.props.moveStates.marginBottomP1)
// }

 render () {

   const {standingMovP1} = this.props.moveStates
   const {punchMovP1} = this.props.moveStates
   const {duckMovP1} = this.props.moveStates
   const {jumpMovP1} = this.props.moveStates
   const leftMargin = {
     marginLeft: this.props.moveStates.marginP1 + 'vw'
   };
   const hadukenBallMargin = {
     marginLeft: this.props.moveStates.hadukenBallMarginP1 + 'vw'
    //  backgroundColor: 'pink'
   }

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

   const duckMovementP1 = (
         <div className="leftMargin">
           <div style={leftMargin}>
             <SpriteAnimator
               ref='sprite'
               width={46}
               height={108}
               sprite='../src/duckP1.svg'
               shouldAnimate={duckMovP1}
               fps={6}
               startFrame={0}
               stopLastFrame={true}
               reset={!duckMovP1}
             />
           </div>
         </div>
       )

       const jumpMovementP1 = (
         <div className="bottomMargin">
          <div style={leftMargin}>
            <SpriteAnimator
              ref='sprite'
              width={90}
              height={108}
              sprite='../src/jumpP1.svg'
              shouldAnimate={jumpMovP1}
              fps={3}
              startFrame={0}
              stopLastFrame={true}
              reset={!jumpMovP1}
            />
          </div>
        </div>
        )

      const hadukenBallP1 = (
          <div style={hadukenBallMargin}>H</div>

      )

       const movementToRender = () => {
         if(this.props.moveStates.duckMovP1){
             return (duckMovementP1);
         } else if (this.props.moveStates.punchMovP1){
             return (punchMovementP1);
         } else if (this.props.moveStates.jumpMovP1){
             return (jumpMovementP1);
         } else if (this.props.moveStates.hadukenStartP1){
           return (hadukenBallP1);
         } else {
             return (standingMovementP1);
         }
       };

   return (
    <div>
        { movementToRender() }
    </div>
   )
 }
}

export default PlayerOne;
