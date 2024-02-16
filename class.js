import * as emoji from 'node-emoji';
import chalk from 'chalk';


let ghost = emoji.get('ghost');

export class Mycharacter {
    constructor(name, life) {
        this.name = name;
        this.life = life;
        this.wrong = false;
        this.round = 0;
    }

    wrongGuess() {
        this.wrong = true;
        if (this.life.length > 0) {
            this.life.pop();
        }
        const newLife = [...this.life];
        return chalk.red(`${this.name}, you found a ${ghost} in that door => ${newLife}`);
    }

    rightGuess() {
        return chalk.greenBright(`Well done ${this.name}, you found the right door`);
    }

    wonGame(round, n) {
        if (round === n) {
            return chalk.bgGreenBright(`${this.name} WON THE GAME`);
        } else {
            return "";
        }
    }

    gameOver() {
        if (!this.life.length) {
            return chalk.bgRed(`${this.name} lost the game`);
        } else {
            return "";
        }
    }
}