// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); // file system packge we dont have to download it is part the npm system
const path = require('path');
const generateMarkdown = require

// TODO: Create an array of questions for user input

inquirer
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Whats your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'GenerateMarkdown',
    },
    {
        type: 'input',
        meassge: 'please write a short description about your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'npm i',
    },
    {
        type: 'input',
        message: 'What kind of lincense should your projct have?',
        name: 'mti',
    },
    {
        type: 'input',
        message: 'What command should be run to run test?',
        nema: 'test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo',
        name: 'entertainment'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
]

// TODO: Create a function to write README file

function writeToFile(andresilvasilva, data) { 
  return fs.writeFileSync(path.join(process.cwd(), andresilvasilva))
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then((response) => {
    console.log('generation README file');
    writeToFile('READ.md', generateMarkdown({...response}))
   })
 }

// Function call to initialize app
init();
