const Employee = require('./employee'); 
class Engineer extends Employee {
    constructor(name, id, email, githubUserName){
        super(name, id, email); 
        this.githubUserName = githubUserName; 
    }
    getRole(){
        super.getRole(); 
        return "Engineer"; 
    }
    getGithub(){
        return this.githubUserName; 
    }
}
module.exports = Engineer; 