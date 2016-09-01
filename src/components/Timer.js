import React, { Component } from 'react';

export default class Timer extends Component {

constructor(){
  super();
  this.timer()
}

timer(){
  const self = this
  const time = setInterval(function (){
    self.props.timer(1);
    if(self.props.time === 0) {
      clearInterval(time);
    }
  },1000)
}
  render () {
    const time = {
      left: 36.7 + 'vw',
      position: "absolute",
      top: 110
    }
    return (
      <div style={time}>
        <h1>Time Left: {this.props.time} Seconds</h1>
      </div>
    )
  }
}
