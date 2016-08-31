import React, { Component } from 'react';

export default class HPOne extends Component {
  render () {
    const p2Health = {
      right: 5,
      position: "absolute",
      top: 0
    }
    return (
      <div style={p2Health}>
        <h2>P2 {this.props.healthbar} HP</h2>
        <progress id="health" value={this.props.healthbar} max="100"/>
      </div>
    )
  }
}
