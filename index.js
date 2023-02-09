
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
- <a name="description">Description</a>
- [Installation] (#installation)
- [usage] (#usage)
- [Collaborators] (#collaborators)
- [Guidelines] (#guidelines)
- [Tests] (#test)
- [Licence] (#license)
- [Contact] (#contact)

## Description
${response.description}

## Installation <a name="installation"></a>
${response.installation}

## Usage <a name="usage"></a>
${response.usage}

## Collaborators <p name="installation"></p>
${response.collaborators}

## Guideline Contributions to Follow <p name="guidelines"></p>
${response.guidelines}

## Tests <p name="tests"></p>
${response.tests}

## License Used <a name="license"></a>
${response.license}

## Badges
<a name="badges"></a>
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