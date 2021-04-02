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
    getRole(){
        //returns employee
        return Employee; 
    }
}

class Manager extends Employee {
    this.officeNumber = officeNumber; 
    getRole(){
        return Manager; 
    }
}
class Engineer extends Employee {
    this.githubUserName = githubUserName; 
}
class Intern extends Employee {
    this.school = school; 
    getSchool(school){
        return school; 
        getRole(){
            return Intern; 
        }
    }
}