import React, { Component } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import helpers from '../utils/helpers.js';

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

    const containerModal = {
      top: 6 + 'vh',
      textAlign: 'center'
    }
    return (
      <div style={visibility}>
        <div className="static-modal">
          <Modal.Dialog style={containerModal}>
            <Modal.Header>
              <Modal.Title>{this.state.winner.toUpperCase()} WON!</Modal.Title>
              <Modal.Title>HP: {this.state.winnerHP}</Modal.Title>
              <Modal.Title>Time: {this.state.timer}</Modal.Title>
                </Modal.Header>
                  <Modal.Body>
                    <FormControl onChange={(event) => this.setState({input: event.target.value})} placeholder="Name" />
                    <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>Save High Score</Button>
                  </Modal.Body>

          </Modal.Dialog>
          </div>
      </div>
    )
  }
}
