const manager = require('../lib/Manager');

describe('Manager',()=>{
    describe('Initialize',()=>{
        it('should create an object with parameters of "name","id","email" and "officeNumber"',()=>{
            const name = 'Jordan';
            const id = 1;
            const email = 'jordan@fakemail.com'
            const office = '213'
      
            const obj = new manager(name,id,email,office);
      
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(office)
        });
    });

    describe('getOffice',()=>{
        it('should return the value under this.officeNumber',()=>{
            const name = 'Jordan';
            const id = 1;
            const email = 'jordan@fakemail.com'
            const office = '213'
      
            const obj = new manager(name,id,email,office);
      
            expect(obj.getOffice()).toEqual(obj.officeNumber);
        });
    });

    describe('getRole',()=>{
        it('should automatically cause the default role to be overwritten to "Manager"',()=>{
            const name = 'Jordan';
            const id = 1;
            const email = 'jordan@fakemail.com'
            const office = '213'
      
            const obj = new manager(name,id,email,office);
      
            expect(obj.getRole()).toEqual('Manager');

        });
    });
});