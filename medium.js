import inquirer from 'inquirer';
import { Mycharacter } from './class.js';
import * as emoji from 'node-emoji';

let door = emoji.get("door");
let doors = [door, door, door,door,door];
let heart = emoji.get('heart');
let hearts = [heart, heart, heart];

export const mediumGame = async (name) => {
    let character = new Mycharacter(name, hearts);

    for (let i = 0; i < 5; i++) {
        let { result } = await inquirer.prompt({
            name: "result",
            type: "list",
            message: "Select door:",
            choices: doors,
        });

        character.round += 1;

        if (doors.indexOf(result) === randomDoor()) {
            console.log(character.round, character.rightGuess(), character.wonGame(character.round, 5));
        } else {
            console.log(character.round, character.wrongGuess(), character.wonGame(character.round, 5), character.gameOver());
            if (character.gameOver()) {
                break; 
            }
            if (character.round === 5 && (character.wrongGuess() === true)){
                console.log(character.gameOver())
            }
        }
    }
};

const randomDoor = () => {
    return Math.floor(Math.random() * 3);
};