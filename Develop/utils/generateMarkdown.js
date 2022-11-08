// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

function rendersLicenseBadge(license) {
    switch (license) {
      case "Apache License 2.0":
        return "![License: Apache v2](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      case "GNU General Public License v3.0":
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      case "MIT License":
        return "![License: MIT]https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)";
      case "Mozilla Public License 2.0":
        return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      default:
        return "";
    }
  }
  //TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  
  function renderLicenseLink(license) {
    switch (license) {
      case "Apache License 2.0":
        return "![Link: Apache v2](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)";
      case "GNU General Public License v3.0":
        return "![Link: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)";
      case "MIT License":
        return "![Link: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)";
      case "Mozilla Public License 2.0":
        return "![Link: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)";
      default:
        return "";
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  // function renderLicenseSection(license) {
  //   if license
  // }
  // ![node.js badge](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)
  
  // TODO: Create a function to generate markdown for README
  
  const generateMarkdown = (data) => {
    return `# ${data.title}
  ![node.js badge](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)
  ${rendersLicenseBadge(data.license)}
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
  \`\`\`
  - npm init
      
  - npm install inquirer
      
  - ${data.installation}
  \`\`\` 
  ## Usage
  Run the following command in your command line and follow the prompts:
  \`\`\` 
 ${data.usage}
  \`\`\`

  ## Tests
  Run the following command in your command line and follow the prompts:
  \`\`\` 
  ${data.test}
  \`\`\`

  ## Contributing 
  ${data.contributing}
      
  ## License 
  ${data.license} 
  
  For further details please use the provided link:

  ${renderLicenseLink(data.license)}
  
  ## Questions
  For further questions please contact me on : 
  * [@Email](mailto:${data.email})
  * [GitHub](${data.username})
  `;
  };
  
  module.exports = generateMarkdown;