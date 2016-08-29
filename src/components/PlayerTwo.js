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
    // if(event.keyCode === 80) {
    //   this.props.punch(true, false, "player-1")
    // }
  }

  movement() {
  if (event.keyCode === 37  && this.props.moveStates.p1Location + 1 !== this.props.moveStates.p2Location){
    this.props.moveForward(14.8, 1, "player-2")
  }
  if (event.keyCode === 39 && this.props.moveStates.p2Location < this.props.moveStates.locationArr[this.props.moveStates.locationArr.length -1]) {
    this.props.moveBackward(14.8, 1, "player-2")
  }


  }


  render() {
    const {standingMov} = this.props.moveStates
    const {punchMov} = this.props.moveStates
    const rightMargin = {
      marginRight: this.props.moveStates.marginP2 + 'vw'
    };
    const standingMovement = (
      <div className="rightMargin">
        <div style={rightMargin}>
          <SpriteAnimator
            ref='sprite'
            width={93.5}
            height={108}
            sprite='../src/standingmovP2.svg'
            shouldAnimate={standingMov}
            fps={6}
            startFrame={0}
            stopLastFrame={false}
            reset={!standingMov}
          />
        </div>
      </div>
    )
{/*const punchMovement = (
      <div className="leftMargin">
        <div style={leftMargin}>
          <SpriteAnimator
            ref='sprite'
            width={73}
            height={108}
            sprite='../src/punch3.svg'
            shouldAnimate={punchMov}
            fps={40}
            startFrame={0}
            stopLastFrame={true}
            reset={!punchMov}
          />
        </div>
      </div>
    )*/}
    return (
      <div>
        <h1>I am player two </h1>
          <div className="container_p2">
            {this.props.moveStates.punchMovP2 === true ? punchMovement : standingMovement}
          </div>
      </div>
    )
  }
}

export default PlayerTwo
