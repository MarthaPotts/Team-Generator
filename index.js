//requireD
const inquirer = require('inquirer'); 
const { generate } = require('rxjs');
const Engineer = require('./Lib/engineer');
const Intern = require('./Lib/intern');
const Manager = require('./Lib/manager');
const fs = require('fs');

//Gather input from User about Engineer
async function addEngineer(employees){
   const engineer = await inquirer.prompt([
        {
        type: 'input',
        name: 'engrName',
        message: 'What is the Engineer Name?', 
    }, 
    {
        type: 'input', 
        name: 'engrId',
        message: 'What is the Engineer Employee ID?',
    },
    {
        type: 'input', 
        name: 'engrEmail',
        message: 'What is the Engineer E-mail?', 
    }, 
    {
        type: 'input', 
        name: 'engrGithub', 
        message: 'What is the Github Username of the Engineer?',
    }
]);
//push input into employees array which holds all of employee related user input
 const eng = new Engineer(engineer.engrName, engineer.engrId, engineer.engrEmail, engineer.engrGithub); 
 employees.push(eng);
}
//gather user input about interns: 
async function addIntern(employees){
    const intern = await inquirer.prompt([
        {
            type: 'input', 
            name: 'internName', 
            message: 'What is the name of the Intern?', 
        }, 
        {
            type: 'input', 
            name: 'internId', 
            message: 'What is the employee ID of the Intern?',
        }, 
        {
            type: 'input', 
            name: 'internEmail', 
            message: 'What is the E-mail address of the Intern?', 
        }, 
        {
            type: 'input', 
            name: 'internSchool', 
            message: 'What is the name of the school your Intern is attending?', 
        }
    ]);
    //push to employees array
     const student = new Intern(intern.internName, intern.internId, intern.internEmail, intern.internSchool);
     employees.push(student);
}
//write html file populated with user input from employess array: 
function generateHTML(employees) {
    const employeeCards =[];
    for(let i = 0; i < employees.length; i++){
        if(employees[i].getRole() === "Manager"){
            employeeCards.push(`<div class="card">
            <h2>${employees[i].getName()}</h2>
            <h3>${employees[i].getRole()}</h3>
            <h3>Employee Id: ${employees[i].getId()}</h3>
            <h3>Email: ${employees[i].getEmail()}</h3>
            <h3>Office Phone: ${employees[i].officeNumber}</h3>
            </div>`)
        } else if (employees[i].getRole() === "Engineer"){
            employeeCards.push(`<div class="card">
            <h2>${employees[i].getName()}</h2>
            <h3>${employees[i].getRole()}</h3>
            <h3>Employee Id: ${employees[i].getId()}</h3>
            <h3>Email: ${employees[i].getEmail()}</h3>
            <h3>Github Profile: ${employees[i].getGithub()}</h3>
            </div>`)
        } else {
            employeeCards.push(`<div class="card">
            <h2>${employees[i].getName()}</h2>
            <h3>${employees[i].getRole()}</h3>
            <h3>Employee Id: ${employees[i].getId()}</h3>
            <h3>Email: ${employees[i].getEmail()}</h3>
            <h3>School: ${employees[i].getSchool()}</h3>
            </div>`)
        }
    }
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder</title>
        <style>
            header {
                width: auto; 
                height: 200px;
                background-color: burlywood;
            }
            h1 {
                text-align: center;
                padding-top: 80px;
            }
            #container {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: baseline;
                background-color: cadetblue;
            }
            .card {
                border: thin solid black;
                margin: 5px;
                display: flex;
                flex-flow: column nowrap; 
            }
        </style>
    </head>
    <body>
        <header>
            <h1>
                Software Engineering Team
            </h1>
        </header>
        <section id="container">`;
            employeeCards.forEach(card => {
                html += card;
            });
       html += `</section>
    </body>
    </html>`;
    fs.writeFile('teambuilder.html', html, (err) =>{
        if (err) console.log(err);
        else console.log("Success!");
    });
}
async function determineCount(employees){
     const count = await inquirer.prompt([
         {
             type: 'input', 
             name: 'count', 
             message: 'How many employees would you like to add to your team?',
         }
     ]);
     for(let i=0; i < count.count; i++){
         const chosen = await inquirer.prompt([
             {
                 type: 'list', 
                 name: 'chosen',
                 message: 'Are we adding an Engineer or an Intern?', 
                 choices: ["Engineer", new inquirer.Separator(), "Intern", new inquirer.Separator()]
            }
         ]);
         if(chosen.chosen === "Engineer"){
             await addEngineer(employees);
         } else {
             await addIntern(employees);
         }
     }
     generateHTML(employees);
}

inquirer.prompt([
    {
        type: 'input', 
        name: 'teamManager', 
        message: 'What is the Team Manager Name?', 
    }, 
    {
        type: 'input', 
        name: 'teamMgrId', 
        message: 'What is the Team Manager Employee ID?', 
    }, 
    {
        type: 'input', 
        name: 'teamMgrEmail', 
        message: 'What is the Team Manager E-mail?',
    }, 
    {
        type: 'input', 
        name: 'teamMgrOffice', 
        message: 'What is the Team Manager Office Phone Number?',
    }
])
.then(answers => {
    const employees = [];
    const manager = new Manager(answers.teamManager, answers.teamMgrId, answers.teamMgrEmail, answers.teamMgrOffice);
    employees.push(manager);
    //console.log(employees);
    determineCount(employees);
})