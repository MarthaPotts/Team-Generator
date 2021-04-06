const { TestScheduler } = require('@jest/core');
const Employee = require('../Lib/employee');
test('if I can get an employeeName from getName function', ()=>{
    const testEmployee = new Employee('Trey Gates');
    expect(testEmployee.getName()).toBe('Trey Gates');
});

test('if I can an employee id with getId function', () => {
    const testId = new Employee('555'); 
    expect(testId.getId()).toBe('555'); 
}); 

test('if getEmail function returns email', () => {
    const testEmail = new Employee('someemail@email.com'); 
    expect(testEmail.getEmail()).toBe('someemail@email.com'); 
}); 

test('if getRole function returns employee role', () => {
    const testEmployeeRole = new Employee('Employee'); 
    expect(testEmployeeRole.getRole()).toBe('Employee'); 
}); 
