// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

// function renderLicenseBadge(license) {
//     if (license !== "No License") {
//         return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
//     }
//     else if (license == "none" || "No license") {
//         return "";
//     }

//TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function renderLicenseLink(license) {

// } else {
//     return ''
//   }
// }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if license
// }

// TODO: Create a function to generate markdown for README

const generateMarkdown = (data) => {
    return `# ${data.title}
<br/>
    ![node.js badge](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)
    <br />
    ## Description
    ${data.description}
    ## Table of Contents
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Questions](#questions)
    
    ## Installation
    Please open Command Line and run the following command/s if needed:
    
     - npm init
    
     - npm install inquirer
    
     - ${data.installation}
    
    ## Usage
    ${data.usage}
    
    Run the following command in your command line and follow the prompts:
    
     - node index.js
    
    ## Tests
    
    Run the following command in your command line and follow the prompts:
    
     - ${data.test}
    
    ## Contributing 
    ${data.contributing}
    
    [How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
    
    ## License 
    ${data.license}
    
    ## Questions
    ${data.questions}
    
    For further questions please contact me on : 
     - [@Email](mailto:${data.email}) 
     - [GitHub](${data.username})<br />`
}

module.exports = generateMarkdown;