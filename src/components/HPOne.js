import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';


export default class HPOne extends Component {
  render () {
    const p1Health = {
      left: 3 + 'vw',
      position: "absolute",
      color: 'white',
      margin: 0
    }

    const p1cont = {
      left: 3 + 'vw',
      position: 'absolute',
      background: 'black',
      borderRadius: 15,
      height: 100,
      width: 250,
      opacity: 0.8
    }

    return (
      <div style={p1cont}>
        <div style={p1Health}>
          <h2>P1 / {this.props.healthbar}HP</h2>
          <ProgressBar id="health" now={this.props.healthbar} label={`${this.props.healthbar}HP`} bsStyle="success"/>
        </div>
      </div>

    )
  }
}
