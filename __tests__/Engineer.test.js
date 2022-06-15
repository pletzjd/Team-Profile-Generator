const engineer = require('../lib/Engineer');

describe('Engineer',()=>{
    describe('Initialize',()=>{
        it('should create an object with parameters of "name","id","email" and "git"',()=>{
            const name = 'Jordan';
            const id = 1;
            const email = 'jordan@fakemail.com'
            const git = 'pletzjd'
      
            const obj = new engineer(name,id,email,git);
      
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.git).toEqual(git)
        });
    });

    describe('getGithub',()=>{
        it('should return the value under this.git',()=>{
            const name = 'Jordan';
            const id = 1;
            const email = 'jordan@fakemail.com'
            const git = 'pletzjd'
      
            const obj = new engineer(name,id,email,git);
      
            expect(obj.getGithub()).toEqual(obj.git);
        });
    });

    describe('getRole',()=>{
        it('should automatically cause the default role to be overwritten to "Engineer"',()=>{
            const name = 'Jordan';
            const id = 1;
            const email = 'jordan@fakemail.com'
            const git = 'pletzjd'
      
            const obj = new engineer(name,id,email,git);
      
            expect(obj.getRole()).toEqual('Engineer');

        });
    });
});