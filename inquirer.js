import inquirer from 'inquirer'
import {easyGame} from './easy.js'
import { Mycharacter } from './class.js'

// const start = async () => {
//     let {result} = await inquirer.prompt({
//         name: "result",
//         type: "confirm",
//         message: "Do you want to start Escape Room?"
//     })
//     return result
// }

export default async function character(){
    let {result} = await inquirer.prompt({
        name: "result",
        type: "input",
        message: "Name your character"
    })
    return result
}

const difficulty = async () =>{
    let {result} = await inquirer.prompt({
        name:"result",
        type:"list",
        message:"Select difficulty",
        choices:["Easy","Medium","Hard"]
    })
    return result
}

const display = async () => {    
    let difficult = await difficulty()
    let chosenChara = await character()
    let name = new Mycharacter(chosenChara) 
    if (difficult === "Easy"){
        return easyGame(name, name.wrongGuess())
    }
}

display()