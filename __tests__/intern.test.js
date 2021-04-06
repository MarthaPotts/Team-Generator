const { TestScheduler } = require('@jest/core');
const Intern = require('../Lib/intern'); 

test('if getSchool function returns school', () =>{
  const testSchool = new Intern('OSU'); 
  expect(testSchool.getSchool()).toBe('OSU'); 
}); 