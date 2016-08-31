import React, { Component } from 'react';
import SpriteAnimator from 'react-sprite-animator';
import '../styling/PlayerOne.css';


class PlayerOne extends Component {
  componentDidMount (){
    window.addEventListener('keyup', this.handleStop.bind(this, event), false)
    window.addEventListener('keydown', this.movement.bind(this, event), false)
  }
  handleStop() {
    console.log(event);
    if(event.keyCode === 80) {
      this.props.punch(true, false, "player-1")
    }
    if(event.keyCode === 83) {
      this.props.duck(true, false, "player-1")
      if(this.props.moveStates.jumpMovP1){
        clearInterval(this.interval)
        this.props.jump(true, false, "player-1");
      }
    }
    const test = this.props
    if(event.keyCode === 87) {
      const interval = setTimeout(function(){
        test.jump(true, false, "player-1");
      }, 1500)
    }
    if(event.keyCode === 93){
      this.props.block(false, "player-1")
    }
  }



  movement() {
    console.log(event);
// event.preventDefault()

    if( event.keyCode === 68 && this.props.moveStates.p1Location + 1 !== this.props.moveStates.p2Location) {
      this.props.moveForward(7.4, 1, "player-1");
    }
    if( event.keyCode === 65 && this.props.moveStates.p1Location > 0) {
      this.props.moveBackward(7.4, 1, "player-1")
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
    if(event.keyCode === 93  && this.props.moveStates.blockAllowanceP1){
      this.props.block(true, "player-1")
      const self = this
      setTimeout(function (){
          self.props.reset("blockAllowanceP1")
      }, 2000)
    }
    if(event.keyCode === 32 && this.props.moveStates.hadukenAllowance){
      // console.log("haduken Location", this.props.moveStates.hadukenLocation);
      this.props.hadukenMov(false, true,true, false, "player-1")
      const self = this
      if(this.props.moveStates.hadukenStartP1) {
        const interval = setInterval(function() {
          self.props.hadukenBall(7.4, 1, "player-1")
          // console.log(self.props.moveStates.hadukenLocation);

          if (self.props.moveStates.hadukenLocation  === self.props.moveStates.p2Location){
            console.log("player lost hp through haduken");
            clearInterval(interval)
            self.props.hadukenMov(true, false,false, null, "player-1")
            self.props.reset('hadukenBall')
          }
        }, 100);
      }
      const self2 = this
      setTimeout(function() {
        self2.props.reset('hadukenAllowance');
      },2000)

    }

    console.log(this.props.moveStates.p1Location, this.props.moveStates.p2Location);

    if (this.props.moveStates.p1Location + 1 === this.props.moveStates.p2Location){
      // console.log("can loose hp");
      if(event.keyCode === 80) {
        if(this.props.moveStates.blockMovP2){
          console.log("P2 lost half HP thorugh punch");
        }
        else {
          console.log("P2 lost HP through punch");
        }
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
    const {hadukenStartP1} = this.props.moveStates
    const {hadukenMovementP1} = this.props.moveStates
    const leftMargin = {
      marginLeft: this.props.moveStates.marginP1 + 'vw'
    };
    const hadukenBallMargin = {
      marginLeft: this.props.moveStates.hadukenBallMarginP1 + 'vw'
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
      <div className="leftMargin">
        <div style={hadukenBallMargin}>
          <SpriteAnimator
            ref='sprite'
            width={93.5}
            height={39}
            sprite='../src/hadukenStart.svg'
            shouldAnimate={hadukenStartP1}
            fps={1}
            startFrame={0}
            stopLastFrame={true}
            reset={!hadukenStartP1}
            />
        </div>
      </div>
    )
    const hadukenMovemntRender = (
      <div className="leftMargin">
        <div style={leftMargin}>
          <SpriteAnimator ref='sprite' width={89} height={97} sprite='../src/hadukenMovP1.svg' shouldAnimate={hadukenMovementP1} fps={4} startFrame={0} stopLastFrame={false} reset={!hadukenMovementP1} />
        </div>
      </div>
    )

    const movementToRender = () => {
      if(this.props.moveStates.duckMovP1){
        return (duckMovementP1);
      } else if (this.props.moveStates.punchMovP1){
        return (punchMovementP1);
      } else if (this.props.moveStates.jumpMovP1){
        return (jumpMovementP1);
      } else if (this.props.moveStates.hadukenStartP1){
        return (<div>{hadukenBallP1} {hadukenMovemntRender}</div>)
      } else if (this.props.moveStates.blockMovP1) {
        return ((<div className="block-containerP1">{standingMovementP1}</div>))
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
