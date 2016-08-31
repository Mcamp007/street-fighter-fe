import React, { Component } from 'react';

export default class HPOne extends Component {
  render () {
    return (
      <div>
        <h2>P2 {this.props.healthbar} HP</h2>
        <progress id="health" value={this.props.healthbar} max="100"/>
      </div>
    )
  }
}
