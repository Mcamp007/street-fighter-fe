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
      right: 36 + 'vw',
      position: "absolute",
      top: 115
    }
    return (
      <div style={time}>
        <h1>{this.props.time} Seconds Remaining</h1>
      </div>
    )
  }
}
