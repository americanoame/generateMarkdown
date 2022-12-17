// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); // file system packge we dont have to download it is part the npm system
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


function writeToFile(andresilva, data) {
    return fs.writeFileSync(path.join(process.cwd(), andresilva))
}

// TODO: Create a function to write README file

function init() {

    // TODO: Create an array of questions for user input
    inquirer
    const questions = [
        {
            type: 'input',
            message: 'README heading?',
            name: 'heading',
        },
        {
            type: 'input',
            meassge: 'please write a short description about your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Whats your email address?',
            name: 'email',
            default: 'andrenations@.me',
        },
        {
            type: 'input',
            message: 'Your Twitter username?',
            name: 'twitter',
            default: 'americanoWEB',
        },

        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'npm i',
        },
        {
            type: 'input',
            message: 'What command should be run to run test?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributing',
        },
        {
            type: 'checkbox',
            message: 'What kind of lincense should your project have?',
            name: 'license',
            choices: ['None', 'MIT', 'GPL 3.0', 'BSD 3', 'ISC', 'MPL', 'GPL', 'AGPL']
        },
    ]


    // TODO: Create a function to initialize app

    inquirer.prompt(questions)
        .then((response) => {
            console.log('generation README file');
            writeToFile('README.md', generateMarkdown({ ...response }))
        })
}

// Function call to initialize app
init();
