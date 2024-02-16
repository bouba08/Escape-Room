import {easyGame} from './easy.js'
import * as emoji from 'node-emoji'
import { Mycharacter } from './class.js'
import { mediumGame } from './medium.js'
import { hardGame } from './hard.js'
import { difficulty } from './inquirer.js'
import chosenCharacter from './inquirer.js'
import chalk from 'chalk';


let heart = emoji.get('heart')
let hearts = [heart,heart,heart]


const display = async () => {
    console.log(chalk.bgYellowBright("Welcome to the haunted house!!!"))    
    let difficult = await difficulty()
    let chosen = await chosenCharacter()
    let character = new Mycharacter(chosen,hearts) 
    if (difficult === "Easy"){
        return easyGame(chosen)
    } else if (difficult === "Medium"){
        return mediumGame(chosen)
    } else{
        return hardGame(chosen)
    }
}

display()
