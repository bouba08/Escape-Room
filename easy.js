import inquirer from 'inquirer'
import character from "./character.js"


let doors = ["door1", "door2", "door3"]


const instruction = () => {
    return "" 
}

const randomDoor = () => {
    return doors[Math.floor(Math.random() * 3)]
}

const game = async () =>{
    let {result} = await inquirer.prompt({
        name:"result",
        type:"list",
        message:"Select difficulty",
        choices: doors,
    })
    return result
}

const display = async () => {
    let started = await game()
    console.log(started)
}

let neck = new character("tom")

console.log(game())

console.log(neck)