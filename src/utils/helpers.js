import axios from 'axios';

export default {
  addHighScore: function (data) {
    return axios.post('http://localhost:3000/highscores/new', data).then(res => {
    console.log(res);
  })
},
  viewHighScore: function (){
    return axios.get('http://localhost:3000/highscores').then(res => {
      return res
    })
  }
}
