// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What was your motitvation?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'project'
    },
    {
        type: 'input',
        message: 'What problem does this project solve?',
        name: 'problem'
    },
    {
        type: 'input',
        message: 'What did you learn when creating this project?',
        name: 'learn'
    },
    {
        type: 'input',
        message: 'What makes your project stand out?',
        name: 'standout'
    },
    {
        type: 'input',
        message: 'What challenges did you face when creating this project?',
        name: 'challenges'
    },
    {
        type: 'input',
        message: 'What features do you plan to implement in the future?',
        name: 'future'
    },
    
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
