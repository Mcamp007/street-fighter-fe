import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styling/movement.css';
import SpriteAnimator from 'react-sprite-animator'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      margin: 0,
      marginP2: 0,
      locationArr: [0,1,2,3,4,5,6,7],
      p1Location: 0,
      p2Location: 0,
<<<<<<< HEAD
      isLiked: false,
      sprite: "../src/p1.svg"
=======
      standingMov: false,
      punchMov: false
>>>>>>> c2aad3725cc4f5c61cc3dec1174f11585db1816f
    }
  }

  componentDidMount() {
    window.addEventListener('onKeyUp', this.handleStop.bind(this, event), false)

     window.addEventListener('keydown', this.margin.bind(this, event), false)
      this.setState({p1Location: this.state.locationArr[0],
                    p2Location: this.state.locationArr[this.state.locationArr.length - 1]
      })
      this.startAction()
   }

  //
   startAction () {
    //  console.log(event);
    this.setState({standingMov: true})

  }

  handleStop(event) {
    // console.log(event);

}

  margin () {
  // console.log(event);
  const currentMargin = this.state.margin
  const currentLocation = this.state.p1Location

  const currentMarginP2 = this.state.marginP2
  const currentLocationP2 = this.state.p2Location
    if( event.keyCode == 39 && this.state.p1Location + 1 !== this.state.p2Location) {
      this.setState({margin: currentMargin + 14.6,
                    p1Location: this.state.p1Location + 1
      })
    }
    if( event.keyCode == 37 && this.state.margin > 0) {
      this.setState({margin: currentMargin - 14.6,
        p1Location: this.state.p1Location - 1
      })
    }
    if (event.keyCode == 65  && this.state.p1Location + 1 !== this.state.p2Location){
      this.setState({marginP2: currentMarginP2 + 14.6,
        p2Location: this.state.p2Location - 1
      })
    }
    if (event.keyCode == 68 && this.state.p2Location < this.state.locationArr[this.state.locationArr.length -1]){
      this.setState({marginP2: currentMarginP2 - 14.6,
                   p2Location: this.state.p2Location + 1
      })
    }

    if(event.keyCode == 80) {
      if(this.state.punchMov === false) {
        this.setState({ standingMov: false,
                        punchMov: true
          })
      }
    }

    else {
      this.setState({ standingMov: true,
                      punchMov: false
        })

    }
    console.log(this.state.p1Location, this.state.p2Location);
    // console.log(this.state.marginP2);
    if (this.state.p1Location + 1 === this.state.p2Location && this.state.punchMov === true){
      console.log("can loose hp");
<<<<<<< HEAD
      if(event.keyCode == 80) {
        console.log("lost HP through punch");

      }
=======
      console.log("lost HP through punch");
>>>>>>> c2aad3725cc4f5c61cc3dec1174f11585db1816f
    }
  }

  onKeyDown(event) {
    if(event.keyCode === 80) {
      this.setState({
        sprite: '../src/punch.svg'
      })
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
            width={89}
            height={100}
            sprite='../src/p1.svg'
            shouldAnimate={standingMov}
            fps={10}
            startFrame={0}
            stopLastFrame={false}
            reset={true}
          />
        </div>
      </div>
    )
    const punchMovement = (
      <div className="leftMargin">
        <div style={leftMargin}>
          <SpriteAnimator
            ref='sprite'
            width={82}
            height={105}
            sprite='../src/punch.svg'
            shouldAnimate={punchMov}
            fps={10}
            startFrame={0}
            stopLastFrame={true}
            reset={!punchMov}
          />
        </div>
      </div>
    )
console.log("standing move", this.state.standingMov, "punchMov", this.state.punchMov);
    return (
      <div>
        <h1>Movement</h1>
        <div className="container">
<<<<<<< HEAD
          <div className="leftMargin">
            <div style={leftMargin}>
              <SpriteAnimator onKeyDown={this.onKeyDown.bind(this)}
                ref='sprite'
                width={89}
                height={100}
                sprite={this.state.sprite}
                shouldAnimate={isLiked}
                fps={10}
                startFrame={0}
                stopLastFrame={false}
                reset={!isLiked}
              />
            </div>
          </div>
=======
            {this.state.punchMov == true ? punchMovement : standingMovement}
>>>>>>> c2aad3725cc4f5c61cc3dec1174f11585db1816f
          <div className="rightMargin">
            <div style={rightMargin}>
              <SpriteAnimator
                ref='sprite'
                width={88}
                height={100}
                sprite='../src/p2.svg'
                shouldAnimate={true}
                fps={10}
                startFrame={0}
                stopLastFrame={false}
                reset={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

{/*window.removeEventListener('resize', this.handleResize);*/}
