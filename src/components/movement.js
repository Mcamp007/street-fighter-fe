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
      locationArr: [0,1,2,3,4,5,6,7,8,9],
      p1Location: 0,
      p2Location: 0,
      isLiked: false
    }
  }

  componentDidMount() {
     window.addEventListener('keydown', this.margin.bind(this, event), false)
      this.setState({p1Location: this.state.locationArr[0],
                    p2Location: this.state.locationArr[this.state.locationArr.length - 1]
      })
      this.startAction()
   }


   startAction () {
    const {isLiked} = this.state.isLiked
    this.setState({isLiked: !isLiked})
  }

  handleStop() {
    console.log("hi");
    this.setState({isLiked: false})
}

  margin () {
  // console.log(event);
  const currentMargin = this.state.margin
  const currentLocation = this.state.p1Location

  const currentMarginP2 = this.state.marginP2
  const currentLocationP2 = this.state.p2Location
    if( event.keyCode == 39 && this.state.p1Location + 1 !== this.state.p2Location) {
      this.setState({margin: currentMargin + 10,
                    p1Location: this.state.p1Location + 1
      })
    }
    if( event.keyCode == 37 && this.state.margin > 0) {
      this.setState({margin: currentMargin - 10,
        p1Location: this.state.p1Location - 1
      })
    }
    if (event.keyCode == 65  && this.state.p1Location + 1 !== this.state.p2Location){
      this.setState({marginP2: currentMarginP2 + 10,
        p2Location: this.state.p2Location - 1
      })
    }
    if (event.keyCode == 68 && this.state.p2Location < this.state.locationArr[this.state.locationArr.length -1]){
      this.setState({marginP2: currentMarginP2 - 10,
                   p2Location: this.state.p2Location + 1
      })
    }
    //68 == d
    console.log(this.state.p1Location, this.state.p2Location);
    // console.log(this.state.marginP2);
    if (this.state.p1Location + 1 === this.state.p2Location){
      console.log("can loose hp");
      if(event.keyCode == 80) {
        console.log("lost HP through punch");
      }
    }
  }


  render() {
    const {isLiked} = this.state
    const leftMargin = {
      marginLeft: this.state.margin + 'vw'
      // backgroundColor: 'pink'
      // width: 100,
      // height: 300,
    };
    const rightMargin = {
      marginRight: this.state.marginP2 + 'vw',
      backgroundColor: 'black',
      width: 100,
      height: 300
    }
    // console.log(rightMargin.marginRight);
    return (
      <div>
        <h1>Movement</h1>
        <div className="container">
          <div className="leftMargin">
            <div style={leftMargin}>
              <SpriteAnimator
                ref='sprite'
                width={89}
                height={100}
                sprite='../src/nw8UyWV01.svg'
                shouldAnimate={isLiked}
                fps={10}
                startFrame={0}
                stopLastFrame={false}
                reset={!isLiked}
              />
            </div>
          </div>
          <div className="rightMargin">
            <div style={rightMargin}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

{/*window.removeEventListener('resize', this.handleResize);*/}
