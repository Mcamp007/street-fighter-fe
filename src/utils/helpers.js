import axios from 'axios';

export default {
  addHighScore: function (data) {
    return axios.post('https://afternoon-brushlands-59800.herokuapp.com/highscores/new', data).then(res => {
    console.log(res);
  })
},
  viewHighScore: function (){
    return axios.get('https://afternoon-brushlands-59800.herokuapp.com/highscores').then(res => {
      return res
    })
  }
}
