import React, { Component } from 'react'
import SpriteAnimator from 'react-sprite-animator';
import '../styling/PlayerTwo.css'


class PlayerTwo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount (){
    window.addEventListener('keyup', this.handleStop.bind(this, event), false)
    window.addEventListener('keydown', this.movement.bind(this, event), false)


  }
  handleStop() {
    // console.log(event);
    if(event.keyCode === 16) {
      this.props.punch(true, false, "player-2")
    }
    if(event.keyCode === 40) {
      this.props.duck(true, false, "player-2")
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
    if(event.keyCode === 16) {
      this.props.punch(false, true, "player-2")
    }
    if(event.keyCode === 40){
      this.props.duck(false, true, "player-2")
    }

    if (this.props.moveStates.p1Location + 1 === this.props.moveStates.p2Location){
          // console.log("can loose hp");
      if(event.keyCode === 16) {
              console.log("P1 lost HP through punch");
      }
    }
  }


  render() {
    const {standingMovP2} = this.props.moveStates
    const {punchMovP2} = this.props.moveStates
    const {duckMovP2} = this.props.moveStates
    const rightMargin = {
      marginRight: this.props.moveStates.marginP2 + 'vw'
      };
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

    const movementToRender = () => {
      if(this.props.moveStates.duckMovP2){
          return (duckMovementP2);
      } else if (this.props.moveStates.punchMovP2){
          return (punchMovementP2);
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
