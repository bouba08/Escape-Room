import inquirer from 'inquirer'
import character from "./inquirer.js"


export class Mycharacter {
  constructor(name) {
    this.name = name;
    this.life = ['❤️','❤️','❤️'];
    this.wrong = false;
  }

  wrongGuess() {
    this.wrong = true
    if (this.wrong) {
        this.life.splice(-1)
        }
    return this.life
  }
  gameOver(){
    if (!this.life){
        return "Game over"
    }
  } 
}



// console.log(next.wrongGuess(),next.wrongGuess(),next.wrongGuess(), next.gameOver())

const display = async () => {
    let started = await character()
    return started
}

let name = await display()

let next = new Mycharacter(name)

console.log(next.wrongGuess())
