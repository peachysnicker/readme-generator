const fs = require("fs");
const inquirer = require("inquirer");


const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation or instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is some usage information?",
        name: "usage",
    },
    {
        type: "input",
        message:
            "List your collaborators with links to their GitHub profiles.",
        name: "collaborators"
    },
    {
        type: "list",
        message: "What are the guidelines for contributing to this application?",
        choices: [
            "https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md",
            "None",
        ],
        default:
            "https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md",
        name: "guidelines",
    },
    {
        type: "list",
        message: "Choose your license",
        choices: [
            "Apache license 2.0",
            "GNU General Public License v3.0",
            "MIT",
        ],
        default: "Option 3: MIT",
        name: "license",
    },
    {
        type: "list",
        message: "Choose your status badge in accordance to your license",
        choices: [
            "APACHE Badge: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            "GENERAL Badge: [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
            "MIT Badge: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        ],
        default: "MIT Badge: ",
        name: "badge",

    },
    {
        type: "input",
        message: "What tests have you done for your readme generator?",
        name: "tests",
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email",
    },
    {
        type: "input",
        message: "Please enter your personal github link",
        name: "github",
    },

];

inquirer
    .prompt(questions)
    //function to write read me file - create the file
    .then((response) =>
        fs.writeFile("readme.md",
            `# ${response.title}
## License Badge
${response.badge}

### Table of Contents
-<a name="description" href="#description">Description</a>
-<a name="installation" href="#installation">Installation</a>
-<a name="usage" href="#usage">Usage</a>
-<a name="collaborators" href="#collaborators">Collaborators</a>
-<a name="guidelines" href="#guidelines">Guidelines</a>
-<a name="tests" href="#tests">Tests</a>
-<a name="license" href="#license">License</a>
-<a name="contact" href="#contact">Contact</a>

## Description
${response.description}

## Installation 
${response.installation}


## Usage 
${response.usage}


## Collaborators
${response.collaborators}

## Guideline Contributions  
${response.guidelines}

## Tests 
${response.tests}

## License Used 
${response.license}


## Contact me
With questions please do not hesitate to email or review my github profile.
${response.github}
${response.email}
`,
            (err) => (err ? console.log(err) : console.log("succes!!"))
        ));


