import inquirer from 'inquirer'
import * as emoji from 'node-emoji'

let wrong;
let name;
let door = emoji.get("door")

let doors = [door, door, door]


const instruction = () => {
    return "" 
}

const randomDoor = () => {
    return Math.floor(Math.random() * 3)
}

const easyGame = async () =>{
    for (let i = 0; i < 5; i++){
    let {result} = await inquirer.prompt({
        name:"result",
        type:"list",
        message:"Select door",
        choices: doors,
    })
    
    if ( doors.indexOf(result) === randomDoor()){
        console.log(`Well done ${name}, you found right door`)
    } else {
        console.log(`wrong`)
    }
}
}

// const display = async () => {
//     name = await character()
//     let oj = new Mycharacter(name)
//     let started = await game()
//     console.log(oj.name)
// }


// console.log(game())

console.log(easyGame())

