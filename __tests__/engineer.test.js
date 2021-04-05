//subclass which should return GithubUserName in addition to employee prototype class
//export default class (parent)
//import default class to consumer (instance)
import { beforeEach, expect, it, jest } from '@jest/globals';
import Employee from '/Lib/employee.js'; 

import Engineer from '/Lib/engineer.js';

jest.mock('/Lib/employee'); 

beforeEach(() => {
    Employee.mockClear();
}); 

it('check if the consumer called the class constructor', () => {
    const Engineer = new Engineer(); 
    expect(Employee).toHaveBeenCalledTimes(1); 
}); 

it('check if the consumer called a method on the class instance', () => {
    //show mockClear() is working: 
    expect(Employee).not.toHaveBeenCalled(); 
    //should call the contructor again
    const Engineer = new Engineer(); 
    expect(Employee).toHaveBeenCalledTimes(1); 
    //test method getName()
    const pretendEngineer = 'Trey Gates'; 
    Engineer.getName(); 
    //mock.instance, redundant but eh we're trying to learn
    const mockEmployeeInstance = Employee.mock.instances[0]; 
    const mockGetName = mockEmployeeInstance.getName; 
    expect(mockGetName.mock.calls[0][0].toEqual(pretendEngineer)); 
    //should do the same thing
    expect(mockGetName).toHaveBeenCalledWith(prentendEngineer);
    expect(mockGetName).toHaveBeenCalledTimes(1); 
}); 
//these failed. unfortunately without a why
//a complete log of this run can be found in: 
// /Users/marthapotts/.npm/_logs/2021-04-05T16_25_26_937Z-debug.log
//how did I get the debugger? how do I not use the debugger? 

//manual mock implementation in  a __mocks__folder, allows to specify the implementation and can be used across test files (sounds ideal); 
//import named export into test file
export const mockGetName = jest.fn(); 
const mock = jest.fn().mockImplementation( () =>{
    return {getName: mockGetName}; 
});

export defualt mock; 

//import the mock and mock method shared by all instances: 
//employee.test.js ? 
import Employee, {mockGetName} from 'Lib/employee.js'; 
import Engineer from 'Lib/engineer.js'; 
jest.mock('/Lib/employee'); //should make Employee a mock constructor, maybe. 

beforeEach( () => {
    Employee.mockClear(); 
    mockGetName.mockClear(); 
}); 

it('check if consumer calls class constructor', () => {
    const Engineer = new Engineer(); 
    const pretendEngineer = 'Trey Gates'; 
    Engineer.getName(); 
    expect(mocGetName).toHaveBeenCalledWith(pretendEngineer); 
}); 
//and this failed also, with npm err! message(s) incl: failed at Team-Generator@1.0.0 test script, new log /Users/marthapotts/.npm/_logs/2021-04-05T16_37_53_226Z-debug.log

