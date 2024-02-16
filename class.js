import inquirer from 'inquirer'
import character from "./inquirer.js"
import * as emoji from 'node-emoji'

let heart = emoji.get('heart')
let ghost = emoji.get('ghost')

export class Mycharacter {
  constructor(name) {
    this.name = name;
    this.life = [heart,heart,heart];
    this.wrong = false;
  }

  wrongGuess() {
    this.wrong = true
    if (this.wrong) {
        this.life.splice(-1)
        }
    return `You found a ${ghost} in that dooor => ${this.life}`
  }
  gameOver(){
    if (!this.life.length){
        return "Game over"
    } else{
      return ""
    }
  } 
}

const display = async () => {
    let started = await character()
    return started
}

let name = await display()

let next = new Mycharacter(name)


// console.log(next.wrongGuess(),next.wrongGuess(),next.wrongGuess(),next.gameOver())

