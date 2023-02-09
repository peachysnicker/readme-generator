
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
//DONE/description, D/installation instructions, D/usage information, D/contribution guidelines, and D/test instructions - video?
//add badge license - notice is added to the section of the README entitled License that explains which license the application is covered under
//D/github username with link - D/email with how to reach me
//table of contents with links
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
            "Option 1: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md",
            "Option 2: None",
        ],
        default:
            "Choice A: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md",
        name: "contribute",
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
    {
        type: "list",
        message: "Choose your license",
        choices: [
            "Option 1: Apache license 2.0",
            "Option 2: GNU General Public License v3.0",
            "Option 3: MIT",
        ],
        default: "Option 3: MIT",
        name: "license",
    },
];

inquirer
    .prompt(questions)
    //function to write read me file - create the file
    .then((response) =>
        fs.writeFile("readme.md",
            `# ${response.title}

# Title
${response.title}

### Table of Contents
- <a name="description" href="#description">Description</a>
- <a name="installation" href="#installation">Installation</a>
- <a name="usage" href="#usage">Usage</a>
- <a name="collaborators" href="#collaborators">Collaborators</a>
- <a name="guidelines" href="#guidelines">Guidelines</a>
- <a name="tests" href="#tests">Tests</a>
- <a name="license" href="#license">License</a>
- <a name="contact" href="#contact"></a>

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

## Badges
${response.badge}

## Contact me
${response.github}
${response.githubURL}
${response.email}
`,
            (err) => (err ? console.log(err) : console.log("succes!!"))
        ));


// TODO: Create a function to initialize app
//function init() { }

// // Function call to initialize app
//init();