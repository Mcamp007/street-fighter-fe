import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styling/movement.css';
import SpriteAnimator from 'react-sprite-animator'

///////////////////////////////////////use the function that we learned during splits, the one that is realted to state
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      margin: 0,
      marginP2: 0,
      locationArr: [0,1,2,3,4,5,6,7],
      p1Location: 0,
      p2Location: 0,
      standingMov: false,
      punchMov: false
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleStop.bind(this, event), false)
    window.addEventListener('keydown', this.margin.bind(this, event), false)
      this.setState({p1Location: this.state.locationArr[0],
                    p2Location: this.state.locationArr[this.state.locationArr.length - 1]
      })
      this.setState({standingMov: true})


   }


  handleStop() {
    // console.log(event);
    if(event.keyCode === 80) {
      this.setState({ standingMov: true,
                      punchMov: false
        })
    }
  }

  margin () {
  // console.log(event);
  const currentMargin = this.state.margin
  const currentLocation = this.state.p1Location

  const currentMarginP2 = this.state.marginP2
  const currentLocationP2 = this.state.p2Location
    if( event.keyCode === 39 && this.state.p1Location + 1 !== this.state.p2Location) {
      this.setState({margin: currentMargin + 14.8,
                    p1Location: this.state.p1Location + 1
      })
    }
    if( event.keyCode === 37 && this.state.p1Location > 0) {
      this.setState({margin: currentMargin - 14.8,
        p1Location: this.state.p1Location - 1
      })
    }
    if (event.keyCode === 65  && this.state.p1Location + 1 !== this.state.p2Location){
      this.setState({marginP2: currentMarginP2 + 14.8,
        p2Location: this.state.p2Location - 1
      })
    }
    if (event.keyCode === 68 && this.state.p2Location < this.state.locationArr[this.state.locationArr.length -1]){
      this.setState({marginP2: currentMarginP2 - 14.8,
                   p2Location: this.state.p2Location + 1
      })
    }


    if(event.keyCode === 80) {
        this.setState({ standingMov: false,
                        punchMov: true
        })
    }

    console.log(this.state.p1Location, this.state.p2Location);
    // console.log(this.state.marginP2);
    // if (this.state.p1Location + 1 === this.state.p2Location && this.state.punchMov === true){ //might need this later
    if (this.state.p1Location + 1 === this.state.p2Location){


      if(event.keyCode === 80) {
              console.log("lost HP through punch");
      }
      else if (event.keyCode === 75) {
        console.log("lost HP through kick");
      }
    }
  }


  render() {
    const {standingMov} = this.state
    const {punchMov} = this.state
    const leftMargin = {
      marginLeft: this.state.margin + 'vw'

    };
    const rightMargin = {
      marginRight: this.state.marginP2 + 'vw'
    }

    const standingMovement = (
      <div className="leftMargin">
        <div style={leftMargin}>
          <SpriteAnimator
            ref='sprite'
            width={93.5}
            height={108}
            sprite='../src/standingmovP1.svg'
            shouldAnimate={standingMov}
            fps={6}
            startFrame={0}
            stopLastFrame={false}
            reset={!standingMov}
          />
        </div>
      </div>
    )
    const punchMovement = (
      <div className="leftMargin">
        <div style={leftMargin}>
          <SpriteAnimator
            ref='sprite'
            width={73}
            height={108}
            sprite='../src/punch3.svg'
            shouldAnimate={punchMov}
            fps={40}
            startFrame={0}
            stopLastFrame={true}
            reset={!punchMov}
          />
        </div>
      </div>
    )
// console.log("standing move", this.state.standingMov, "punchMov", this.state.punchMov);
    return (
      <div>
        <h1>Movement</h1>
        <div className="container">
            {this.state.punchMov === true ? punchMovement : standingMovement}
        </div>
      </div>
    );
  }
}

export default App;

{/*window.removeEventListener('resize', this.handleResize);*/}
