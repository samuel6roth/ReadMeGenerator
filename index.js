const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./Assets/genreadme")
const writeFileAsync = util.promisify(fs.writeFile);

function questions(){
    return inquirer.prompt([
        {
            type: "input",
            name: "project",
            message: "What is the name of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please describe your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "What are the required steps to install your project?",
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license for your project.",
            choices: [
                "Apache License 2.0",
                "Mozilla Public License 2.0",
                "GNU LGPLv3",
                "MIT License",
                "The Unlicense"
            ]
        },
        {
            type: "input",
            name: "contributers",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "username",
            message: "Please provide your GitHub username."
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email. "
        }
    ]);
} 


  async function init() {
    try {
        const input = await questions();
        const userData = generateReadme(input);
        await writeFileAsync('README.md', userData);
        console.log('README.md file generated.');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();