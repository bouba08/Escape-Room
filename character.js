export default class character {
  constructor(name, life = 3) {
    this.name = name;
    this.life = life;
    this.wrong = false;
  }

  wrongGuess() {
    this.wrong = true
    if (this.wrong) {
      this.life -= 1
    }
    return this.life
  }
  gameOver(){
    if (!this.life){
        return "Game over"
    }
  } 
}

let next = new character("roger")


console.log(next.wrongGuess(),next.wrongGuess(),next.wrongGuess(), next.gameOver())
