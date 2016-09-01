import React, { Component } from 'react';
import SpriteAnimator from 'react-sprite-animator';
import '../styling/PlayerOne.css';


class PlayerOne extends Component {
  componentDidMount (){
    window.addEventListener('keyup', this.handleStop.bind(this, event), false)
    window.addEventListener('keydown', this.movement.bind(this, event), false)
  }
  handleStop() {
    // console.log(event);
    if(event.code === "ShiftLeft") {
      this.props.punch(true, false, 0, "player-1")
    }
    if(event.code === "AltLeft") {
      console.log('stop');
        this.props.kick(true, false, 0, "player-1")
    }
    if(event.keyCode === 83) {
      this.props.duck(true, false, true, "player-1")
    }
    const test = this.props
    if(event.keyCode === 87) {
      setTimeout(function(){
        console.log(test);
        test.jump(true, false,0, "player-1");
      }, 600)
    }
    // const test2 = this.props
    // if(event.keyCode === 192) {
    //   setTimeout(function() {
    //     test2.hadouken(true, false, true, "visible", false, 0, "player-1")
    //   }, 1200)
    // }
    if(event.keyCode === 17) {
      this.props.block(false, "player-1")
    }
  }

  movement() {
    // console.log(event);
    if( event.keyCode === 68 && this.props.moveStates.p1Location + 1 !== this.props.moveStates.p2Location) {
      this.props.moveForward(3.4, 1, "player-1");
    }
    if( event.keyCode === 65 && this.props.moveStates.p1Location > 0) {
      this.props.moveBackward(3.4, 1, "player-1")
    }
    if(event.code === "ShiftLeft") {
      this.props.punch(false, true, 0, "player-1")
    }
    if(event.code === "AltLeft") {
      console.log("P1 Kick")
      this.props.kick(false, true, 0, "player-1")
    }
    if(event.keyCode === 83){
      this.props.duck(false, true, false, "player-1")
    }
    if(event.keyCode === 87) {
      console.log("jumpp");
      this.props.jump(false, true, 10,"player-1")
      console.log(this.props.moveStates.marginBottomP1)
    }
    if(event.keyCode === 17 && this.props.moveStates.blockAllowanceP1) {
      this.props.block(true, "player-1")
      const self = this
      setTimeout(function() {
        self.props.reset("blockAllowanceP1")
      }, 5000)
    }

    if(event.keyCode === 192 && this.props.moveStates.hadoukenAllowance) {
      this.props.hadouken(false, true, true, "visible", 3.4, false, 0, "player-1")
      const self = this
      const interval = setInterval(function() { self.props.ballMove(1, "player-1");
      if(self.props.moveStates.hadoukenBallPosP1 === self.props.moveStates.p2Location) {
        // console.log("ball locartion", self.props.moveStates.hadoukenBallPosP1);
        if(self.props.moveStates.jumpMovP2){
          console.log("save");
          clearInterval(interval)
          self.props.hadouken(true, false, false, "hidden", 3.4, false, 0, "player-1")
          self.props.reset('hadoukenBall');
        }
        else {
          console.log("player lost hp through hatoken");
          clearInterval(interval);
          self.props.hadouken(true, false, false, "hidden", 0, false, 10, "player-1")
          self.props.reset('hadoukenBall')
        }}}, 50)

        const self2 = this
        setTimeout(function (){
          self2.props.reset('hadoukenAllowance')
        }, 5000)

  }


    console.log(this.props.moveStates.p1Location, this.props.moveStates.p2Location);

    if (this.props.moveStates.p1Location + 1 === this.props.moveStates.p2Location){
          // console.log("can loose hp");
          console.log(this.props.moveStates.duckAllowanceP2)
      if(this.props.moveStates.punchMovP1 && this.props.moveStates.blockMovP2 === false) {
        console.log("P2 lost HP through punch");
        this.props.punch(false, true, 5, "player-1")
      } else if (this.props.moveStates.punchMovP1 && this.props.moveStates.blockMovP2) {
        console.log("no damage to P2")
        this.props.punch(false, true, 2.5, "player-1")
      } else if (this.props.moveStates.kickMovP1 && this.props.moveStates.blockMovP2 === false && this.props.moveStates.duckAllowanceP2) {
        console.log("P2 lost HP through kick");
        this.props.kick(false, true, 7, "player-1")
      } else if (this.props.moveStates.kickMovP1 && this.props.moveStates.blockMovP2) {
        console.log("less damage thorugh kick");
        this.props.kick(false, true, 3.5, "player-1")
      } else if (this.props.moveStates.kickMovP1 && this.props.moveStates.duckMovP2) {
        console.log('no damage');
        this.props.kick(false, true, 0, "player-1")
      }
    }
  }

 render () {
   const {standingMovP1} = this.props.moveStates
   const {punchMovP1} = this.props.moveStates
   const {duckMovP1} = this.props.moveStates
   const {jumpMovP1} = this.props.moveStates
   const {hadoukenMovP1} = this.props.moveStates
   const {hadoukenBallP1} = this.props.moveStates
   const {kickMovP1} = this.props.moveStates
   const leftMargin = {
     marginLeft: this.props.moveStates.marginP1 + 'vw'
   };

   const ballMargin = {
     marginLeft: this.props.moveStates.hadoukenBallMarginP1 + 'vw',
     visibility: this.props.moveStates.ballVisibility
   }

   const marginBottom = {
     marginBottom: this.props.moveStates.marginBottomP1 + 'vw',
     marginLeft: this.props.moveStates.marginP1 + 'vw'
   }

   const standingMovementP1 = (
     <div className="leftMargin">
       <div style={leftMargin}>
         <SpriteAnimator
           ref='sprite'
           width={161}
           height={120}
           sprite='../src/sprites/Hulk/standing.svg'
           shouldAnimate={standingMovP1}
           fps={15}
           startFrame={0}
           stopLastFrame={false}
           reset={standingMovP1}
         />
       </div>
     </div>
   )
   const punchMovementP1 = (
     <div className="leftMargin">
       <div style={leftMargin}>
         <SpriteAnimator
           ref='sprite'
           width={204}
           height={125}
           sprite='../src/sprites/Hulk/punch.svg'
           shouldAnimate={punchMovP1}
           fps={40}
           startFrame={0}
           stopLastFrame={true}
           reset={!punchMovP1}
         />
       </div>
     </div>
   )
   const kickMovementP1 = (
     <div className="leftMargin">
       <div style={leftMargin}>
         <SpriteAnimator
           ref='sprite'
           width={215}
           height={133}
           sprite='../src/sprites/Hulk/kick.svg'
           shouldAnimate={kickMovP1}
           fps={4}
           startFrame={0}
           stopLastFrame={true}
           reset={!kickMovP1}
         />
       </div>
     </div>
   )

   const duckMovementP1 = (
         <div className="leftMargin">
           <div style={leftMargin}>
             <SpriteAnimator
               ref='sprite'
               width={148}
               height={96}
               sprite='../src/sprites/Hulk/duck.svg'
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
         <div className="leftMargin">
          <div style={marginBottom}>
            <SpriteAnimator
              ref='sprite'
              width={143}
              height={90}
              sprite='../src/sprites/Hulk/jump2.svg'
              shouldAnimate={jumpMovP1}
              fps={3}
              startFrame={0}
              stopLastFrame={true}
              reset={!jumpMovP1}
            />
          </div>
        </div>
        )

      // const hadukenMovementP1= (
      //   <div className="leftMargin">
      //     <div style={leftMargin}>
      //       <SpriteAnimator
      //         ref='sprite'
      //         width={90}
      //         height={100}
      //         sprite='../src/hadukenMovP1.svg'
      //         shouldAnimate={hadoukenMovP1}
      //         fps={15}
      //         startFrame={0}
      //         stopLastFrame={true}
      //         reset={!hadoukenMovP1}
      //       />
      //     </div>
      //   </div>
      // )

      const hadoukenBallerP1 =(
        <div className="leftMargin">
          <div style={ballMargin}>
            <SpriteAnimator
              ref='sprite'
              width={210}
              height={120}
              sprite='../src/sprites/Hulk/haduken.svg'
              shouldAnimate={hadoukenBallP1}
              fps={1}
              startFrame={0}
              stopLastFrame={true}
              reset={!hadoukenBallP1}
            />
          </div>
        </div>
      )

       const movementToRender = () => {
         if(this.props.moveStates.duckMovP1){
             return (duckMovementP1);
         } else if (this.props.moveStates.punchMovP1){
             return (punchMovementP1);
         } else if (this.props.moveStates.kickMovP1){
           return (kickMovementP1)
         } else if (this.props.moveStates.jumpMovP1){
             return (jumpMovementP1);
         } else if (this.props.moveStates.hadoukenMovP1){
           return (<div>{hadoukenBallerP1}</div>);
         } else if (this.props.moveStates.blockMovP1) {
           return (<div className="block-containerP1">{standingMovementP1}</div>)
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
