class Employee {
    constructor(name, id, email){
        this.name = name,
        this.id = id, 
        this. email = email, 
    }
    getName(){
     return this; 
    }
    getId(){
     return this;
    }
    getEmail(){
     return this; 
    }
    //let managerRole = () => {return Employee;} ?
    getRole(){
        //returns employee
        return Employee; 
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
    super(name, id, email); 
    }
    getRole(){
        return Manager; 
    }
}
class Engineer extends Employee {
    constructor(name, id, email, githubUserName){
        super(name, id, email); 
    }
    getRole()
}
class Intern extends Employee {
    constructor(name, id, email, githubUserName, school){
    super(name, id, email)
    }
    getSchool(school){
        return school; 
    }
    getRole(){
        return Intern; 
    }
}