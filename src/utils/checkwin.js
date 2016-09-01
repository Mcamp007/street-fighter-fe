export default {
  time: function (player1hp, player2hp, time) {
    if(time === 0 ) {
      if(player1hp > player2hp) {
        console.log("Out of Time! Player One Wins!")
      } else if(player1hp === player2hp) {
        console.log("Out of Time! It's a Draw!")
      } else {
        console.log("Out of Time! Player Two Wins!")
      }
    }
  },
  hp: function (player1hp, player2hp) {
    if(player1hp === 0) {
      console.log("Player Two Wins!")
    } else if (player2hp === 0){
      console.log("Player One Wins!")
    }
  }
}
