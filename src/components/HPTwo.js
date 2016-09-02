import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default class HPTwo extends Component {
  render () {
    const p2Health = {
      right: 3 + 'vw',
      position: "absolute",
      color: 'white',
      top: 0
    }

    const p2cont = {
      right: 3 + 'vw',
      position: 'absolute',
      background: 'black',
      borderRadius: 15,
      height: 100,
      width: 250,
      opacity: 0.8
    }
    return (
    <div style={p2cont}>
      <div style={p2Health}>
        <h2>P2 / {this.props.healthbar}HP</h2>
        <ProgressBar id="health" now={this.props.healthbar} label={`${this.props.healthbar}HP`}/>
      </div>
    </div>
    )
  }
}
