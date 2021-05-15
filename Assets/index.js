const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const chalk = require('chalk');

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
// Welcome message
const welcome = [{
    type: 'confirm',
    prefix: '\b',
    name: 'welcome',
    message: chalk.cyanBright(`Thank you for using my Team Builder application! You will be presented with options for your Team members and their respective details. To begin hit 'Y' or enter.`),

}, ];
// Success message
const generated = chalk.cyanBright(`
Your team has been built, in union there is strength!
//-------------------------------------------------------// 
`);
const employees = [];

function initApp() {
    startHtml();
    addMember();
}
//Add teamMember f()
function addMember() {
    inquirer.prompt([{
                message: "Team member's name?",
                name: "name"
            },
            {
                type: "list",
                message: "What is their role?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ],
                name: "role"
            },
            {
                message: "Enter the team member's id",
                name: "id"
            },
            {
                message: "Enter the team member's email address",
                name: "email"
            }
        ])
        .then(function({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub Username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "Office Phone #";
            }
            inquirer.prompt([{
                        message: `What is this member's ${roleInfo}`,
                        name: "roleInfo"
                    },
                    {
                        type: "list",
                        message: "Would you like to add more members?",
                        choices: [
                            "yes",
                            "no"
                        ],
                        name: "moreMembers"
                    }
                ])
                .then(function({ roleInfo, moreMembers }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    employees.push(newMember);
                    addHtml(newMember)
                        .then(function() {
                            if (moreMembers === "yes") {
                                addMember();
                            } else {
                                finishHtml();
                            }
                        });

                });
        });
}
//Function to write HTML
function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    //initialize HTML
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

//Function call to initialize program
init();