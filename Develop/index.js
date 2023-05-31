// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Give a short description of the project.',
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'List the items in your table of contents.',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Add installation intstructions.',
        },
    {
        type: 'input',
        name: 'Usage',
        message: 'How is this project used?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'What is the license used in this project?',
        choices: ['Apache 2.0', 'IPL 1.0', 'MIT', 'N/A'],
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'List any contributors to this code.',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'What command do you want to use to run a test?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your github username?',
    },
    
    ])
   
// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
fs.writeFile9'./sample/' + fileName, data, (err) =>
err ? console.log(err) : console.log('Congrats!' + fileName + 'generated!')
);
}
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
