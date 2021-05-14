const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const generateMd = require("./utils/generateMd")

// Welcome message
const welcome = [{
    type: 'confirm',
    prefix: '\b',
    name: 'welcome',
    message: chalk.cyanBright(`Thank you for using my Team Builder application! You will be presented with options for your Teams members and their respective details. To begin hit 'Y' or enter.`),

}, ];

// Markdown tips
const startText = chalk.cyanBright(`\n
-------------------------
        MD Syntax
-------------------------
Italic: *text*   
Bold:   **text**  
Links:  [title](https://www.example.com)
Image:  ![alt text](example.jpg)
\n`);

// Success message
const generated = chalk.cyanBright(`
Your README Generated! It's in the "generatedReadMe" folder
//-------------------------------------------------------// 
`);

//Questions for README
const questions = [
    // Project name
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Req)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Req)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Req)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info!');
                return false;
            }
        }
    },
    // Usage Info
    {
        type: 'input',
        name: 'usage',
        message: 'How do you run this project? (Req)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You must provide information on how to use the program!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to this project? (Req)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Req)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project!');
                return false;
            }
        }
    },
    // Licensing
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Req)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },
    // Github
    {
        type: 'input',
        name: 'github',
        message: 'GitHub Username (Req)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Email address?',
    },
];

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your markdown file has been created and stored in the folder.')
    });
}

//Async Function to initialize the generator
const init = async() => {
    try {
        await inquirer.prompt(welcome);
        console.log(startText);
        const data = await inquirer.prompt(questions);
        writeToFile('README.md', generateMd(data));
    } catch (err) {
        console.log(err);
    }
}

//Function call to initialize program
init();