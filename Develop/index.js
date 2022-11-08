//const { default: inquirer } = require("inquirer");

// TODO: Include packages needed for this application

// npm init -y
// npm i inquirer@8.2.4
// const fs = require('fs');
// const iquirier = require('inquirer)
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// const filename = require("./node.js-README-generator/README.md")
// TODO: Create an array of questions for user input
//with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
    .prompt([
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
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Choose your license for this project: ",
            choices: [
                "Apach license 2.0",
                "Mozilla Public License 2.0",
                "MIT",
                "GNU General Public License (GPL)",
                "No License"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have questions? "
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "What is your email: "
        }
    ])
    .then((data) => {
        console.log(data);
   
        // TODO: Create a function to write README file  
        fs.writeFile('README.md', generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Generating README!')
        );
     });





// // TODO: Create a function to initialize app
// function init() {
//     questions() // Prompt user to get input data
//         .then(data => {
//             return generateMarkdown(data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }
// // // Function call to initialize app
//  init();