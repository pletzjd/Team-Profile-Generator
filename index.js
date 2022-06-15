const inquirer = require('inquirer');
const fs = require('fs');
manager = require('./lib/Manager');
engineer = require('./lib/Engineer');
intern = require('./lib/Intern');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('portfolio.html generated'))
}

function generateHTML(response) {

    let managerObj = new manager(response.managerName,response.managerId,response.managerEmail,response.managerOffice);
    let engineer1 =new engineer(response.engineer1Name,response.engineer1Id,response.engineer1Email,response.engineer1Git);
    let engineer2 = new engineer(response.engineer2Name,response.engineer2Id,response.engineer2Email,response.engineer2Git);
    let engineer3 = new engineer(response.engineer3Name,response.engineer3Id,response.engineer3Email,response.engineer3Git);
    let internObj = new intern(response.internName,response.internId,response.internEmail,response.internSchool);
    let engineerObjArr = [engineer1,engineer2,engineer3];

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/CSS/reset.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./assets/CSS/style.css">
        <title>Document</title>
    </head>
    
    <body class="bg-light">
        <header>
            <h1>My Team</h1>
        </header>
    
        <main class="container">
    
            <div class="row justify-content-center mt-4">
                <div class="col-md-4 col-6">
                    <div class="card h-100 text-center">
                        <div class="card-body">
                            <h5 class="card-title">${managerObj.getName()} - ${managerObj.getRole()}</h5>
                            <p class="card-text">id: ${managerObj.getId()}</p>
                            <p class="card-text">Office: ${managerObj.getOffice()}</p>
                            <a class="btn btn-primary" href="mailto:${managerObj.getEmail()}">${managerObj.getEmail()}</a>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="row justify-content-around mt-4">
                <div class="col-md-4 col-6">
                    <div class="card h-100 text-center">
                        <div class="card-body">
                            <h5 class="card-title">${engineerObjArr[0].getName()} - ${engineerObjArr[0].getRole()}</h5>
                            <p class="card-text">id: ${engineerObjArr[0].getId()}</p>
                            <div class="multi-btn">
                                <a class="btn btn-primary" href="mailto:${engineerObjArr[0].getEmail()}">${engineerObjArr[0].getEmail()}</a>
                                <a class="btn btn-primary" href="https://github.com/${engineerObjArr[0].getGithub()}">https://github.com/${engineerObjArr[0].getGithub()}</a>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 col-6">
                    <div class="card h-100 text-center">
                        <div class="card-body">
                            <h5 class="card-title">${engineerObjArr[1].getName()} - ${engineerObjArr[1].getRole()}</h5>
                            <p class="card-text">id: ${engineerObjArr[1].getId()}</p>
                            <div class="multi-btn">
                                <a class="btn btn-primary" href="mailto:${engineerObjArr[1].getEmail()}">${engineerObjArr[1].getEmail()}</a>
                                <a class="btn btn-primary" href="https://github.com/${engineerObjArr[1].getGithub()}">https://github.com/${engineerObjArr[1].getGithub()}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="row justify-content-around mt-4">
                <div class="col-md-4 col-6">
                    <div class="card h-100 text-center">
                        <div class="card-body">
                            <h5 class="card-title">${engineerObjArr[2].getName()} - ${engineerObjArr[2].getRole()}</h5>
                            <p class="card-text">id: ${engineerObjArr[2].getId()}</p>
                            <div class="multi-btn">
                                <a class="btn btn-primary" href="mailto:${engineerObjArr[2].getEmail()}">${engineerObjArr[2].getEmail()}</a>
                                <a class="btn btn-primary" href="https://github.com/${engineerObjArr[2].getGithub()}">https://github.com/${engineerObjArr[2].getGithub()}</a>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 col-6">
                    <div class="card h-100 text-center">
                        <div class="card-body">
                            <h5 class="card-title">${internObj.getName()} - ${internObj.getRole()}</h5>
                            <p class="card-text">id: ${internObj.getId()}</p>
                            <p class="card-text">school: ${internObj.getSchool()}</p>
                            <a class="btn btn-primary" href="mailto:${internObj.getEmail()}">${internObj.getEmail()}</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    
    </body>
    
    </html>
  `;
  }

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'managerName',
            },
            {
                type: 'input',
                message: "What is the manager's id number?",
                name: 'managerId',
            },
            {
                type: 'input',
                message: "What is the manager's email?",
                name: 'managerEmail',
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'managerOffice',
            },
            {
                type: 'input',
                message: "What is the first engineer's name?",
                name: 'engineer1Name',
            },
            {
                type: 'input',
                message: "What is the first engineer's id number?",
                name: 'engineer1Id',
            },
            {
                type: 'input',
                message: "What is the first engineer's email?",
                name: 'engineer1Email',
            },
            {
                type: 'input',
                message: "What is the first engineer's Github username?",
                name: 'engineer1Git',
            },
            {
                type: 'input',
                message: "What is the second engineer's name?",
                name: 'engineer2Name',
            },
            {
                type: 'input',
                message: "What is the second engineer's id number?",
                name: 'engineer2Id',
            },
            {
                type: 'input',
                message: "What is the second engineer's email?",
                name: 'engineer2Email',
            },
            {
                type: 'input',
                message: "What is the second engineer's Github username?",
                name: 'engineer2Git',
            },
            {
                type: 'input',
                message: "What is the third engineer's name?",
                name: 'engineer3Name',
            },
            {
                type: 'input',
                message: "What is the third engineer's id number?",
                name: 'engineer3Id',
            },
            {
                type: 'input',
                message: "What is the third engineer's email?",
                name: 'engineer3Email',
            },
            {
                type: 'input',
                message: "What is the third engineer's Github username?",
                name: 'engineer3Git',
            },
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'internName',
            },
            {
                type: 'input',
                message: "What is the intern's id number?",
                name: 'internId',
            },
            {
                type: 'input',
                message: "What is the intern's email?",
                name: 'internEmail',
            },
            {
                type: 'input',
                message: "What school does the intern go to?",
                name: 'internSchool',
            },
        ])
        .then((response) =>
            writeToFile('./dist/portfolio.html',generateHTML(response))
        );
}

init();