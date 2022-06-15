const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,git,role = 'Engineer'){
        super(name,id,email,role);
        this.git = git;
    }

    getGithub(){
        return this.git;
    }
}

module.exports = Engineer;