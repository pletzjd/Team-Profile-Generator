const intern = require('../lib/Intern');

describe('Intern',()=>{
    describe('Initialize',()=>{
        it('should create an object with parameters of "name","id","email" and "school"',()=>{
            const name = 'Jordan';
            const id = 1;
            const email = 'jordan@fakemail.com'
            const school = 'u of t'
      
            const obj = new intern(name,id,email,school);
      
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school)
        });
    });

    describe('getSchool',()=>{
        it('should return the value under this.school',()=>{
            const name = 'Jordan';
            const id = 1;
            const email = 'jordan@fakemail.com'
            const school = 'u of t'
      
            const obj = new intern(name,id,email,school);
      
            expect(obj.getSchool()).toEqual(obj.school);
        });
    });

    describe('getRole',()=>{
        it('should automatically cause the default role to be overwritten to "Intern"',()=>{
            const name = 'Jordan';
            const id = 1;
            const email = 'jordan@fakemail.com'
            const school = 'u of t'
      
            const obj = new intern(name,id,email,school);
      
            expect(obj.getRole()).toEqual('Intern');

        });
    });
});