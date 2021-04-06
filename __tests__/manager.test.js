const { TestScheduler } = require('@jest/core');
const Manager = require('../Lib/manager'); 

test('if getRole function returns manager', () =>{
    const testManager = new Manager('manager'); 
    expect(testManager.getRole()).toBe('manager'); 
}); 
