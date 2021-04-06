// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What was your motitvation?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'What are required steps to install your project?',
        name: 'install'
    },
    {
        type: 'list',
        message: 'Please choose a license for you project.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    
]


const generator = ({ title, description, install, motivation, license }) => {
return `# ${title}
## Description
#### ${description}
## Table of Contents
* [Installation] (#install)
* [Motivation] (#install)
* [License] (#license)
## Installation
#### ${install}
## Motivation
#### ${motivation}
## License
#### ${license}
`
}


inquirer.prompt(questions)
    .then((response) => {
    const readMe = generator(response)
    fs.writeFile('README.md', readMe, (err) =>
    err ? console.error(err) : console.log('Prompts written!'))
});
