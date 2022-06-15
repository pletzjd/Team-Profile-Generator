const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,office,role = 'Manager'){
        super(name,id,email,role)
        this.officeNumber = office
    }

    getOffice(){
        return this.officeNumber;
    }
}

module.exports = Manager;