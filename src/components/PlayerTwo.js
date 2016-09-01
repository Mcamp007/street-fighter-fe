import React, { Component } from 'react';
import SpriteAnimator from 'react-sprite-animator';
import '../styling/PlayerTwo.css';

class PlayerTwo extends Component {
  componentDidMount (){
    window.addEventListener('keyup', this.handleStop.bind(this, event), false)
    window.addEventListener('keydown', this.movement.bind(this, event), false)


  }
  handleStop() {
    // console.log(event);
    if(event.keyCode === 32) {
      this.props.punch(true, false, 0, "player-2")
    }
    if(event.keyCode === 222) {
      this.props.duck(true, false, true, "player-2")
    }
    if(event.keyCode === 186) {
      this.props.jump(true, false, "player-2")
    }
    if(event.keyCode === 186) {
      const self = this
      setTimeout(function(){
        self.props.jump(true, false, 0, "player-2");
      }, 1200)
    }
    if(event.code === "ShiftRight") {
      this.props.block(false, "player-2")
    }
    if(event.code === "AltRight") {
      console.log('stop');
        this.props.kick(true, false, 0, "player-2")
    }
    // const test2 = this.props
    // if(event.keyCode === 190) {
    //   setTimeout(function() {
    //     test2.hadouken(true, false, true, "visible", true, 0, "player-2")
    //   }, 1200)
    // }
  }

  movement() {
    // console.log(event);
    if (event.keyCode === 191  && this.props.moveStates.p1Location + 1 !== this.props.moveStates.p2Location){
      this.props.moveForward(3.4, 1, "player-2")
    }
    if (event.keyCode === 221 && this.props.moveStates.p2Location < this.props.moveStates.locationArr[this.props.moveStates.locationArr.length -1]) {
      this.props.moveBackward(3.4, 1, "player-2")
    }
    if(event.keyCode === 32) {
      this.props.punch(false, true, 0, "player-2")
      console.log("punch")
    }
    if(event.keyCode === 222){
      this.props.duck(false, true, false, "player-2")
    }
    if(event.keyCode === 186) {
      this.props.jump(false, true, 10, "player-2")
    }
    if(event.code === "AltRight") {
        this.props.kick(false, true, 0, "player-2")
    }
    if(event.code === "ShiftRight" && this.props.moveStates.blockAllowanceP2) {
      this.props.block(true, "player-2")
      const self2 = this
      setTimeout(function() {
        self2.props.reset("blockAllowanceP2")
      }, 5000)
    }
    if(event.keyCode === 190 && this.props.moveStates.hadoukenAllowanceP2) {
      this.props.hadouken(false, true, true, "visible", 3.4, false, 0, "player-2")
      const self = this
      const interval = setInterval(function() { self.props.ballMove(1, "player-2");
      if(self.props.moveStates.hadoukenBallPosP2 === self.props.moveStates.p1Location) {
        console.log("collision");
        // console.log("ball locartion", self.props.moveStates.hadoukenBallPosP1);
        if(self.props.moveStates.jumpMovP1){
          console.log("save");
          clearInterval(interval)
          self.props.hadouken(true, false, false, "hidden", 3.4, false, 0, "player-2")
          self.props.reset('hadoukenBallP2');
        }
        else {
          console.log("player lost hp through hatoken");
          clearInterval(interval);
          self.props.hadouken(true, false, false, "hidden", 0, false, 10, "player-2")
          self.props.reset('hadoukenBallP2')
        }}}, 50)

        const self2 = this
        setTimeout(function (){
          self2.props.reset('hadoukenAllowanceP2')
        }, 5000)

  }

    if (this.props.moveStates.p1Location + 1 === this.props.moveStates.p2Location){
          // console.log("can loose hp");
      if(this.props.moveStates.punchMovP2 && this.props.moveStates.blockMovP1 === false) {
        console.log("P1 lost HP through punch");
        this.props.punch(false, true, 5, "player-2");
      } else if (this.props.moveStates.punchMovP2 && this.props.moveStates.blockMovP1) {
        this.props.punch(false, true, 2.5, "player-2")
      } else if (this.props.moveStates.kickMovP2 && this.props.moveStates.blockMovP1 === false && this.props.moveStates.duckAllowanceP1) {
        this.props.kick(false, true, 7, "player-2")
      } else if (this.props.moveStates.kickMovP2 && this.props.moveStates.blockMovP1) {
        this.props.kick(false, true, 3.5, "player-2")
      } else if (this.props.moveStates.kickMovP2 && this.props.moveStates.duckMovP1) {
        this.props.kick(false, true, 0, "player-2")
      }
    }
  }

  render() {
    const {standingMovP2} = this.props.moveStates
    const {punchMovP2} = this.props.moveStates
    const {duckMovP2} = this.props.moveStates
    const {jumpMovP2} = this.props.moveStates
    const {kickMovP2} = this.props.moveStates
    const {hadoukenMovP2} = this.props.moveStates
    const {hadoukenBallP2} = this.props.moveStates
    const {p1Status} = this.props.moveStates
    const {p2Status} = this.props.moveStates
    const rightMargin = {
      marginRight: this.props.moveStates.marginP2 + 'vw'
      };

    const marginBottom = {
      marginBottom: this.props.moveStates.marginBottomP2 + 'vw',
      marginRight: this.props.moveStates.marginP2 + 'vw'
    }

    const ballMargin = {
      marginRight: this.props.moveStates.hadoukenBallMarginP2 + 'vw',
      visibility: this.props.moveStates.ballVisibilityP2,
      marginBottom: 31
    }

    const standingMovementP2 = (
      <div className="rightMargin">
        <div style={rightMargin}>
          <SpriteAnimator
            ref='sprite'
            width={66.8}
            height={94}
            sprite='../src/sprites/Ken/standing.svg'
            shouldAnimate={standingMovP2}
            fps={13}
            startFrame={0}
            stopLastFrame={false}
            reset={!standingMovP2}
          />
        </div>
      </div>
    )
    const punchMovementP2 = (
          <div className="rightMargin">
            <div style={rightMargin}>
              <SpriteAnimator
                ref='sprite'
                width={108}
                height={94}
                sprite='../src/sprites/Ken/punch.svg'
                shouldAnimate={punchMovP2}
                fps={1}
                startFrame={0}
                stopLastFrame={false}
                reset={!punchMovP2}
              />
            </div>
          </div>
        )
        const kickMovementP2 = (
          <div className="rightMargin">
            <div style={rightMargin}>
              <SpriteAnimator
                ref='sprite'
                width={114}
                height={94}
                sprite='./src/sprites/Ken/kick.svg'
                shouldAnimate={kickMovP2}
                fps={1}
                startFrame={0}
                stopLastFrame={true}
                reset={!kickMovP2}
              />
            </div>
          </div>
        )

    const duckMovementP2 = (
          <div className="rightMargin">
            <div style={rightMargin}>
              <SpriteAnimator
                ref='sprite'
                width={61}
                height={61}
                sprite='../src/sprites/Ken/duck.svg'
                shouldAnimate={duckMovP2}
                fps={6}
                startFrame={0}
                stopLastFrame={true}
                reset={!duckMovP2}
              />
            </div>
          </div>
        )

        const jumpMovementP2 = (
          <div className="rightMargin">
           <div style={marginBottom}>
             <SpriteAnimator
               ref='sprite'
               width={48}
               height={70}
               sprite='../src/sprites/Ken/jump.svg'
               shouldAnimate={jumpMovP2}
               fps={1}
               startFrame={0}
               stopLastFrame={true}
               reset={!jumpMovP2}
             />
           </div>
         </div>
         )

         const hadoukenBallerP2 =(
           <div className="rightMargin">
             <div style={ballMargin}>
               <SpriteAnimator
                 ref='sprite'
                 width={30}
                 height={28}
                 sprite='../src/sprites/Ken/haduken.svg'
                 shouldAnimate={hadoukenBallP2}
                 fps={1}
                 startFrame={0}
                 stopLastFrame={false}
                 reset={!hadoukenBallP2}
               />
             </div>
           </div>
         )

         const hadukenMovementP2= (
           <div className="rightMargin">
             <div style={rightMargin}>
               <SpriteAnimator
                 ref='sprite'
                 width={112}
                 height={77.3}
                 sprite='../src/sprites/Ken/hadukenMov.svg'
                 shouldAnimate={hadoukenMovP2}
                 fps={10}
                 startFrame={0}
                 stopLastFrame={true}
                 reset={!hadoukenMovP2}
               />
             </div>
           </div>
         )
         const lost =(
           <div className="rightMargin">
             <div style={rightMargin}>
               <SpriteAnimator
                 ref='sprite'
                 width={128}
                 height={31.5}
                 sprite='../src/sprites/Ken/dead.svg'
                 shouldAnimate={p2Status}
                 fps={1}
                 startFrame={0}
                 stopLastFrame={true}
                 reset={!p2Status}
               />
             </div>
           </div>
         )
         const won =(
           <div className="rightMargin">
             <div style={rightMargin}>
               <SpriteAnimator
                 ref='sprite'
                 width={55}
                 height={124}
                 sprite='../src/sprites/Ken/won.svg'
                 shouldAnimate={p2Status}
                 fps={1}
                 startFrame={0}
                 stopLastFrame={true}
                 reset={!p2Status}
               />
             </div>
           </div>
         )

    const movementToRender = () => {
      if(this.props.moveStates.duckMovP2){
          return (duckMovementP2);
      } else if (this.props.moveStates.punchMovP2){
          return (punchMovementP2);
      } else if(this.props.moveStates.kickMovP2){
        return (kickMovementP2)
      } else if (this.props.moveStates.jumpMovP2){
          return (jumpMovementP2);
      } else if (this.props.moveStates.blockMovP2) {
        return (<div className="block-containerP2">{standingMovementP2}</div>)
      } else if (this.props.moveStates.hadoukenMovP2) {
        return (<div>{hadukenMovementP2} {hadoukenBallerP2}</div>)
      } else if (this.props.moveStates.p2Status){
         return (won)
       } else if (this.props.moveStates.p2Status === false){
         return (lost)
       } else {
          return (standingMovementP2);
      }
    };

    return (
      <div>
        <div className="container_p2">
          { movementToRender() }
        </div>
      </div>
    )
  }
}

export default PlayerTwo
