import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styling/movement.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      margin: 0,
      marginP2: 0,
      locationArr: [0,1,2,3,4,5,6,7,8,9,10],
      p1Location: 0,
      p2Location: 0
    }
  }

  componentDidMount() {
     window.addEventListener('keydown', this.margin.bind(this, event), false)
      this.setState({p1Location: this.state.locationArr[0],
                    p2Location: this.state.locationArr[this.state.locationArr.length - 1]
      })
   }

  margin () {
  // console.log(event);
  const currentMargin = this.state.margin
  const currentLocation = this.state.p1Location

  const currentMarginP2 = this.state.marginP2
  const currentLocationP2 = this.state.p2Location
    if( event.keyCode == 39 ) {
      this.setState({margin: currentMargin + 10,
                    p1Location: this.state.p1Location + 1
      })
    }
    if( event.keyCode == 37) {
      this.setState({margin: currentMargin - 10,
        p1Location: this.state.p1Location - 1
      })
    }
    if (event.keyCode == 68){
      this.setState({marginP2: currentMarginP2 - 10,
        p2Location: this.state.p2Location + 1
      })
    }
    if (event.keyCode == 65){
      this.setState({marginP2: currentMarginP2 +git a 10,
                   p2Location: this.state.p2Location - 1
      })
    }

    console.log(this.state.p1Location, this.state.p2Location);
    console.log(this.state.marginP2);
    if (this.state.p1Location + 1 === this.state.p2Location){
      console.log("can loose hp");
      if(event.keyCode == 80) {
        console.log("lost HP through punch");
      }
    }
  }


  render() {

    const leftMargin = {
      marginLeft: this.state.margin + 'vw',
      backgroundColor: 'pink',
      width: 100,
      height: 300,
    };
    const rightMargin = {
      marginLeft: this.state.marginP2 + 'vw',
      backgroundColor: 'black',
      width: 100,
      height: 300
    }
    console.log(rightMargin.marginRight);
    return (
      <div>
        <h1>Movement</h1>
        <div className="container">
          <div className="leftMargin">
            <div style={leftMargin}></div>
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
