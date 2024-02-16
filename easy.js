import inquirer from 'inquirer'
import * as emoji from 'node-emoji'

let door = emoji.get("door")

let doors = [door, door, door]


const instruction = () => {
    return "" 
}

const randomDoor = () => {
    return Math.floor(Math.random() * 3)
}

export const easyGame = async (wrong, name) =>{
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
        console.log(wrong)
        let {result} = await inquirer.prompt({
            name:"result",
            type:"list",
            message:"Select door",
            choices: doors,
    })
}
}
}

// const display = async () => {
//     let instruct = instruction() 
//     name = await character()
//     let oj = new Mycharacter(name)
//     let started = await game()
//     console.log(oj.name)
// }


// // console.log(game())

// console.log(easyGame())

