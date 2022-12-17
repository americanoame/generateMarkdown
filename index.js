//  Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); // file system packge we dont have to download it is part the npm system
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

function writeToFile(andresilva, data) {

        // fs.writeFileSync() creates a new file if the specified file does not exist

        // The path.join() method joins the specified path segments into one path. 

        return fs.writeFileSync(`path.join(process.cwd(), ${andresilva}`, data)

        // process.cwd() this method returns a string specifying the current working
        // directory of the node.js process
}

//  a function to write README file
//  A particular init() function may be used to initialise the whole webpage
function init() {

    //  an array of questions for user input
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
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'Username',
        },
        {
            type: 'input',
            message: 'Whats your email address?',
            name: 'email',
            default: 'Andrenations@.me',
        },
        {
            type: 'input',
            message: 'Your Twitter username?',
            name: 'twitter',
            default: 'AmericanoWEB',
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
            name: 'Contributing',
        },
        {
            type: 'checkbox',
            message: 'What kind of lincense should your project have?',
            name: 'license',
            choices: ['None', 'MIT', 'GPL 3.0', 'BSD 3', 'ISC', 'MPL', 'GPL', 'AGPL']
        },
    ]

    // a function to initialize app

    inquirer.prompt(questions)
        .then((response) => {
            console.log('generation README file');
            writeToFile('README.md', generateMarkdown({ ...response }))
        })
}

// Function call to initialize app
init();
