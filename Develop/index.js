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
        type: 'input',
        name: 'License',
        message: 'What is the license used in this project?',
    },
    {
        type: 'list',
        name: 'Contributors',
        message: 'List any contributors to this code.',
    },
    {
        type: 'input',
        name: 'Tests',
        message: '[]',
    },
    {
        type: 'input',
        name: 'Questions',
        message: '[]',
    },
    
    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
