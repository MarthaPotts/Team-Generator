//requireD
const inquirer = require('inquirer'); 
//prompt! to enter Team Manager info//
function addManager(){
    inquirer.prompt([
        //questions here type, name, message,...
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
        //what I need the input for/where
    })
    .catch(error => {
        if(error.isTttyError){
            //couldn't render 
        } else {
            //something else, default
        }
    }); 
}

//Menu: option: addEngineer()? addIntern()? finishTeam()?

function addEngineer(){
    inquirer.prompt([
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
])
.then(answers => {
    //what I need the input for/where
})
.catch(error => {
    if(error.isTttyError){
        //couldn't render 
    } else {
        //something else, default
    }
}); 
}

//returnToMenu(){}//{type: checkbox} ?[Engineer, Intern, Finish] true = () =>

//questions/answers/error parameters?
function addIntern(){
    inquirer.prompt([
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
    ])
    .then(answers => {
        //what I need the input for/where
    })
    .catch(error => {
        if(error.isTttyError){
            //couldn't render 
        } else {
            //something else, default
        }
    }); 
}

//finishTeam(){ exit && generatHTML}