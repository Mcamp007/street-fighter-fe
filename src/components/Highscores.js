import React, {Component} from 'react'
import helpers from '../utils/helpers.js'
import _ from 'lodash'
import '../styling/HighScore.css'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class HighScores extends Component {
  constructor (props){
    super(props)
    this.state = {
      response: ''
    }
  }

  componentDidMount(){
    helpers.viewHighScore().then(res => {
      console.log("this is FE", res);
      this.setState({
        response: res.data
      })
    })
  }

  render(){
  const test = _.values(this.state.response)
    return (
      <div className="containerHS">
        {
          test.map((user, i) => {
            return (
              <div>
                <ListGroup>
                  <ListGroupItem header={user.name}>HP:{user.winnerHP} Time:{user.time}</ListGroupItem>
                </ListGroup>
              </div>


            )
        })
        }
      </div>
    )
  }
}
