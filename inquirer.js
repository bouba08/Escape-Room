import inquirer from 'inquirer'
import chalk from 'chalk';


export default async function chosenCharacter(){
    let {result} = await inquirer.prompt({
        name: "result",
        type: "input",
        message: "Name your character"
    })
    return chalk.blue(result)
}

export const difficulty = async () =>{
    let {result} = await inquirer.prompt({
        name:"result",
        type:"list",
        message:"Select difficulty",
        choices:["Easy","Medium","Hard"]
    })
    return result
}

