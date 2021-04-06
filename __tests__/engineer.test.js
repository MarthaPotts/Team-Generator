const { TestScheduler } = require('@jest/core');
const Engineer = require('../Lib/engineer'); 

test('if getRole function returns Engineer', ()=> {
    const testEngRole = new Engineer("Engineer"); 
    expect(testEngRole.getRole()).toBe("Engineer"); 
}); 
test('if Engineer has property githubUserName', () =>{
    const testProp = new Engineer("githubUserName"); 
    expect(testProp.this.githubUserName).toBe("githubUserName"); 
}); 

test('if getGithub function returns githubUserName', () => {
    const testGitUserName = new Engineer("engineer@github.com"); 
    expect(testGitUserName.getGithub()).toBe("engineer@github.com"); 
}); 