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
      fontSize: 20,
      opacity: 0.8,
      textAlign: 'center',
      right: 48 + 'vw',
      position: "absolute",
      padding: 10,
      top: 100,
      width: 100,
      borderRadius: 20,
      backgroundColor: 'white'
    }
    return (
      <div style={time}>
        <div>{this.props.time}</div>
      </div>
    )
  }
}
