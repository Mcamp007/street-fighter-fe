import React, { Component } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import helpers from '../utils/helpers.js';
import { browserHistory } from 'react-router';

export default class Win extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: "hidden",
      timer: 0,
      winner: "",
      winnerHP: 0,
      input: ""
    }
    this.checkWin();
  }

  checkWin() {
  const self = this
  const timer = setInterval(function(){
    console.log("timer fuck u ");
    if(self.props.time === 0 || self.props.p1hp === 0 || self.props.p2hp === 0){
      clearInterval(timer)
      self.setState({
        modalVisible: "visible",
        timer: self.props.time
      })
      if (self.props.p1hp === self.props.p2hp){
        self.setState({
          winner: "Its a tie",
          timer: self.props.time
        })
        location.reload()
      } else if(self.props.p1hp > self.props.p2hp) {
        self.setState({
          winner: "Hulk",
          timer: self.props.time,
          winnerHP: self.props.p1hp
        })
        self.props.deadOrAlive(true ,'player-1')
        self.props.deadOrAlive(false ,'player-2')
      }
      else {
        self.setState({
          winner: "Ken",
          timer: self.props.time,
          winnerHP: self.props.p2hp
        })
        self.props.deadOrAlive(false ,'player-1')
        self.props.deadOrAlive(true ,'player-2')
      }
    }
  }, 1000)
}

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      time: this.state.timer,
      winnerHP: this.state.winnerHP,
      name: this.state.input
    }
    console.log(data)
    helpers.addHighScore(data)
    .then(res => {
      console.log(res);
    })
  }
  render () {
    const visibility = {
      visibility: this.state.modalVisible
    }
    return (
      <div style={visibility}>
        <div className="static-modal">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{this.state.winner} HP{this.state.winnerHP}Wins!!!</Modal.Title>
                </Modal.Header>
                  <Modal.Body>
                    <FormControl onChange={(event) => this.setState({input: event.target.value})} placeholder="Name" />
                    <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Save changes</Button>
                    <Modal.Title>{this.state.timer} seconds</Modal.Title>
                  </Modal.Body>

          </Modal.Dialog>
          </div>
      </div>
    )
  }
}
