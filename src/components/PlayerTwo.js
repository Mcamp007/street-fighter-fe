import React, { Component } from 'react'
import SpriteAnimator from 'react-sprite-animator';


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
  }

  movement() {
    if (event.keyCode === 37  && this.props.moveStates.p1Location + 1 !== this.props.moveStates.p2Location){
      this.props.moveForward(14.8, 1, "player-2")
    }
    if (event.keyCode === 39 && this.props.moveStates.p2Location < this.props.moveStates.locationArr[this.props.moveStates.locationArr.length -1]) {
      this.props.moveBackward(14.8, 1, "player-2")
    }
    if(event.keyCode === 16) {
      this.props.punch(false, true, "player-2")
    }
  }


  render() {
    const {standingMovP2} = this.props.moveStates
    const {punchMovP2} = this.props.moveStates
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
    return (
      <div>
        <h1>I am player two </h1>
          <div className="container_p2">
            {this.props.moveStates.punchMovP2 === true ? punchMovementP2 : standingMovementP2}
          </div>
      </div>
    )
  }
}

export default PlayerTwo
