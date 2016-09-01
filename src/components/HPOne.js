import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default class HPOne extends Component {
  render () {
    const p1Health = {
      left: 38 + 'vw',
      position: "absolute",
      top: 45
    }
    return (
      <div style={p1Health}>
        <h2>P1 / {this.props.healthbar}HP</h2>
        <ProgressBar id="health" now={this.props.healthbar} label={`${this.props.healthbar}HP`} bsStyle="success"/>
      </div>
    )
  }
}
