
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
//description, installation instructions, usage information, contribution guidelines, and test instructions
//add badge license - notice is added to the section of the README entitled License that explains which license the application is covered under
//github username with link - email with how to reach me
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
        type: "list",
        message:
            "List your contributors with links to their GitHub profiles.",
        choices: [
            "option 1: https://www.google.ca",
            "option 2: https://www.google.ca",
            "option 3: None",
        ],
    },
    {
        type: "list",
        message: "What are the guidelines for contributing to this application?",
        choices: [
            "Choice A: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md",
            "Choice B: None",
        ],
        default:
            "Choice A: https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md",
        name: "contribute",
    },
]
// TODO: Create a function to initialize app
//function init() { }

// // Function call to initialize app
//init();