import React, { Component } from 'react'


class PlayerTwo extends Component {

  movement() {
    const currentMarginP2 = this.state.marginP2
    const currentLocationP2 = this.state.p2Location


  if (event.keyCode === 39  && this.props.moveStates.p1Location + 1 !== this.props.moveStates.p2Location){
      this.setState({margin: currentMargin + 14.8,
      p1Location: this.state.p2Location - 1
    })

  }
  if (event.keyCode === 37 && this.props.moveStates.p2Location < this.props.moveStates.locationArr[this.props.moveStates.locationArr.length -1]){
    this.setState({marginP2: currentMarginP2 - 14.8,
                 p2Location: this.state.p2Location + 1
    })
  }


  }


  render() {
    return (

    )
  }
}

export default PlayerTwo
