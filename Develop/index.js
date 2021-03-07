// TODO: Include packages needed for this application
//file system
const fs = require('fs');
//inquire
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        //ask for username, name is just reference
        name: 'title',
        message: 'Hello, enter the title of the project',
        type: 'input'
    },
    {
        //ask descrip
        name: 'description',
        message: 'Please describe your project',
        type: 'input'
    },
    {
        //instal
        name: 'instalation',
        message: 'How do you install the project',
        type: 'input' //npm i
    },
    {
        //usage
        name: 'usage',
        message: 'Enter usage information',
        type: 'input' //node index.js
    },
    {
        //contributors
        name: 'contributors',
        message: 'Please name the contributor',
        type: 'input'
    },
    {
        //ask for username, name is just reference
        name: 'test',
        message: 'Test Information',
        type: 'input' //npm run test
    },
    {
        //license
        name: 'license',
        message: 'Choose a license',
        type: 'list',
        choices: ['BSD', 'MIT', 'GNU'],
    },
    {
        //question
        name: 'question',
        message: 'Enter your username',
        type: 'input'
    },


];
//print answer
inquirer
    .prompt(questions)
    .then(answers => {
       console.log(answers);
       writeToFile('README.md', answers);
    })

// TODO: Create a function to write README file
//brings 'answers' to README
function writeToFile(fileName, data) { 
    //readme gen
    const readmeData = generateMarkdown(data);
    fs.writeFile(fileName, readmeData)
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
