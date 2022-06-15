const employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an object with parameters of 'name', 'id' and 'email'", () => {
        const obj = new employee();
  
        expect("name" in obj).toEqual(true);
        expect('id' in obj).toEqual(true);
        expect('email' in obj).toEqual(true);
      });
  
      it("should set 'name','id' and 'email' when created", () => {
        const name = 'Jordan';
        const id = 1;
        const email = 'jordan@fakemail.com'
  
        const obj = new employee(name,id,email);
  
        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
      });  
    });
  
    describe("getName", () => {
      it("should return the name stored in the obj under this.name", () => {
        const obj = new employee('jordan',1,'jordan@fakemail.com');
  
        expect(obj.getName()).toEqual(obj.name);
      });
    });
  
    describe("getId", () => {
      it("should return the id stored in the obj under this.id", () => {
        const obj = new employee('jordan',1,'jordan@fakemail.com');
  
        expect(obj.getId()).toEqual(obj.id);
      });
    });
  
    describe("getEmail", () => {
      it("should return the email stored in the obj under this.email", () => {
        const obj = new employee('jordan',1,'jordan@fakemail.com');
  
        expect(obj.getEmail()).toEqual(obj.email);
      });
    });

    describe("getRole", () => {
      it("should return the default role of Employee", () => {
        const obj = new employee('jordan',1,'jordan@fakemail.com');
  
        expect(obj.getRole()).toEqual('Employee');
      });
    });
  });
  