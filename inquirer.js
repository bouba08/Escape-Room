import inquirer from 'inquirer'

const start = async () => {
    let {result} = await inquirer.prompt({
        name: "result",
        type: "confirm",
        message: "Do you want to start Escape Room?"
    })
    return result
}

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

// const display = async () => {
//     let started = await start()
//     console.log(started)
// }

// display()