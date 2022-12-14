//const { default: inquirer } = require("inquirer");

// TODO: Include packages needed for this application

// npm init -y
// npm i inquirer@8.2.4

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
//with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies? ",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to test?"
    },
    {
        type: "input",
        name: "usage",
        message: "What command should be used to get started with the prompts?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose your license for this project: ",
        choices: [
            "MIT",
            "Apache license 2.0",
            "Mozilla Public License 2.0",
            "GNU General Public License v3.0",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address: "
    }
]



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((data) => {
            console.log(data);

            // TODO: Create a function to write README file  
            fs.writeFile('README.md', generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('...Generating README!')
            );
        });
    };
    // Function call to initialize app
    init();