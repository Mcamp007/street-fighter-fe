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
    if(event.code === "AltRight") {
      this.props.punch(true, false, 0, "player-2")
    }
    if(event.keyCode === 40) {
      this.props.duck(true, false, "player-2")
    }
    if(event.keyCode === 38) {
      this.props.jump(true, false, "player-2")
    }
    if(event.keyCode === 38) {
      const self = this
      setTimeout(function(){
        self.props.jump(true, false, 0, "player-2");
      }, 1200)
    }
    if(event.code === "ShiftRight") {
      this.props.block(false, "player-2")
    }
    if(event.code === "MetaRight") {
      console.log('stop');
        this.props.kick(true, false, 0, "player-2")
    }
  }

  movement() {
    // console.log(event);
    if (event.keyCode === 37  && this.props.moveStates.p1Location + 1 !== this.props.moveStates.p2Location){
      this.props.moveForward(14.8, 1, "player-2")
    }
    if (event.keyCode === 39 && this.props.moveStates.p2Location < this.props.moveStates.locationArr[this.props.moveStates.locationArr.length -1]) {
      this.props.moveBackward(14.8, 1, "player-2")
    }
    if(event.code === "AltRight") {
      this.props.punch(false, true, 0, "player-2")
    }
    if(event.keyCode === 40){
      this.props.duck(false, true, "player-2")
    }
    if(event.keyCode === 38) {
      this.props.jump(false, true, 10, "player-2")
    }
    if(event.keyCode === 13) {
      console.log("P2 Haduken")
    }
    if(event.code === "MetaRight") {
        this.props.kick(false, true, 0, "player-2")
    }
    if(event.code === "ShiftRight" && this.props.moveStates.blockAllowanceP2) {
      this.props.block(true, "player-2")
      const self2 = this
      setTimeout(function() {
        self2.props.reset("blockAllowanceP2")
      }, 5000)
    }

    if (this.props.moveStates.p1Location + 1 === this.props.moveStates.p2Location){
          // console.log("can loose hp");
      if(event.code === "AltRight" && this.props.moveStates.blockMovP1 === false) {
        console.log("P1 lost HP through punch");
        this.props.punch(false, true, 5, "player-2");
      } else if (event.code === "AltRight" && this.props.moveStates.blockMovP1) {
        this.props.punch(false, true, 2.5, "player-2")
      }
    }
  }

  render() {
    const {standingMovP2} = this.props.moveStates
    const {punchMovP2} = this.props.moveStates
    const {duckMovP2} = this.props.moveStates
    const {jumpMovP2} = this.props.moveStates
    const {kickMovP2} = this.props.moveStates
    const rightMargin = {
      marginRight: this.props.moveStates.marginP2 + 'vw'
      };

    const marginBottom = {
      marginBottom: this.props.moveStates.marginBottomP2 + 'vw',
      marginRight: this.props.moveStates.marginP2 + 'vw'
    }

    const standingMovementP2 = (
      <div className="rightMargin">
        <div style={rightMargin}>
          <SpriteAnimator
            ref='sprite'
            width={93.5}
            height={108}
            sprite='../src/standingmovP2.svg'
            shouldAnimate={standingMovP2}
            fps={6}
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
                width={73}
                height={108}
                sprite='../src/punchP2.svg'
                shouldAnimate={punchMovP2}
                fps={40}
                startFrame={0}
                stopLastFrame={true}
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
                width={90.5}
                height={108}
                sprite='../src/kickP2.svg'
                shouldAnimate={kickMovP2}
                fps={4}
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
                width={46}
                height={108}
                sprite='../src/duckP2.svg'
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
               width={90}
               height={108}
               sprite='../src/jumpP2.svg'
               shouldAnimate={jumpMovP2}
               fps={3}
               startFrame={0}
               stopLastFrame={true}
               reset={!jumpMovP2}
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
