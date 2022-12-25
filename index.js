//  Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); // 
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

function writeToFile(andresilva, data) {

    return fs.writeFileSync(andresilva, data)
}

//  a function to write README file
//  A particular init() function may be used to initialise the whole webpage
function init() {

    //  an array of questions for user input
    inquirer
    const questions = [
        {
            type: 'input',
            message: 'What is project Title?',
            name: 'generateMarkdown',
        },
        {
            type: 'input',
            meassge: 'please write a short description about your project',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo',
            name: 'Usage'
        },
        {
            type: 'checkbox',
            message: 'What kind of lincense should your project have?',
            name: 'License',
            choices: ['None', 'MIT', 'GPL 3.0', 'BSD 3', 'ISC', 'MPL', 'GPL', 'AGPL']
        },
        {
            type: 'input',
            message: 'What does the user need to know about contribution to the repo?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What command should be run to run test?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'americanoame',
        },
        {
            type: 'input',
            message: 'Whats your email address?',
            name: 'Email',
            default: 'Andrenations@gmail.com',
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'npm',
        },

    ]

    // a function to initialize app

    inquirer.prompt(questions)
        .then((response) => {
            console.log('generation README file');
            writeToFile('README.md', generateMarkdown(response))
        })
}

// Function call to initialize app
init();
