// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// const generateMarkdown = require("./src/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "list",
      name: "license",
      message: "What is your project license?",
      choices: [
        "MIT",
        "APACHE",
        "GPL",
        "BSD",
        "None",
      ],
    },
    {
      type: "input",
      name: "description",
      message: "What is your project description?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage of your project?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who can contribute to your project?",
    },
    {
      type: "input",
      name: "tests",
      message: "What are the tests for your project?",
    },
    {
      type: "input",
      name: "questions",
      message: "Who can contact you with questions?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    }
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

questions()
  .then((answers) => generateMarkdown(answers))
  .then((data) => writeToFile("README.md", data))
  .catch((err) => console.log(err));
