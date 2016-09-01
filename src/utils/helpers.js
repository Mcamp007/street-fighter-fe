import axios from 'axios';

export default {
  addHighScore: function (data) {
    return axios.post('http://localhost:3000/highscores/new', data).then(res => {
    console.log(res);
  })
  }
}
