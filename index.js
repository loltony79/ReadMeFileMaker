// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// The file name that is being created is called log.md
let fileName = "log.md";
fs.writeFile(fileName, "", (err) =>
  err ? console.error(err) : console.log('Success!')
);

// TODO: Create an array of questions for user input
const questions = ["Project title?", "Project description?", "Installation guide?", "Project usage?", "Contribution guide?", "Project test?", "License (Boost or Apache)?", "Github username?", "Email address?"];

// TODO: Create a function to write README file

// A function that takes in user input
function writeToFile(fileName, data) {
    // Prompts user to input the data
    inquirer
    .prompt([
        {
            type: "input",
            message: data[0],
            name: "title", 
        },
        {
            type: "input",
            message: data[1],
            name: "description", 
        },
        {
            type: "input",
            message: data[2],
            name: "installation", 
        },
        {
            type: "input",
            message: data[3],
            name: "usage", 
        },
        {
            type: "input",
            message: data[4],
            name: "contribution",
        },
        {
            type: "input",
            message: data[5],
            name: "test",
        },
        {
            type: "input",
            message: data[6],
            name: "license",
        },
        {
            type: "input",
            message: data[7],
            name: "github",
        },
        {
            type: "input",
            message: data[8],
            name: "email",
        },
    ])
    // After the data is entered by the user, the data is being written on the log.md  
    .then((response) => 
        fs.writeFile(fileName, generateMarkdown(response), (err) =>
            err ? console.error(err) : console.log('Success!')
    )
    );
}
// TODO: Create a function to initialize app
function init() {
    writeToFile(fileName, questions);
}
// Function call to initialize app
init();
