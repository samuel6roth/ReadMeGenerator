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
    // {
    //     type: 'input',
    //     message: 'Why did you build this project?',
    //     name: 'project'
    // },
    // {
    //     type: 'input',
    //     message: 'What problem does this project solve?',
    //     name: 'problem'
    // },
    // {
    //     type: 'input',
    //     message: 'What did you learn when creating this project?',
    //     name: 'learn'
    // },
    // {
    //     type: 'input',
    //     message: 'What makes your project stand out?',
    //     name: 'standout'
    // },
    // {
    //     type: 'input',
    //     message: 'What challenges did you face when creating this project?',
    //     name: 'challenges'
    // },
    {
        type: 'input',
        message: 'What features do you plan to implement in the future?',
        name: 'future'
    },
    
]


const generator = ({ title, future, description, motivation }) => {
return `# ${title}
## ${description}
## ${motivation}
## ${future}
`
}

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
inquirer.prompt(questions)
    .then((response) => {
    const readMe = generator(response)
    fs.writeFile('README.md', readMe, (err) =>
    err ? console.error(err) : console.log('Prompts written!'))
});








// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
