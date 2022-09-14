// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'descriptionInput',
        message: 'What is the description for your project? (Descriptions typically include your motivation, why the project was built, the problems the project solves, and what you learned.)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installationInput',
        message: 'What steps are needed to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation steps!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usageInput',
        message: 'Provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide usage information!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'licenseInput',
        message: 'Which license would you like your project to have? Pick one.',
        choices: ['Mozilla', 'Apache', 'MIT', 'Unlicense', 'None'],
    },
    {
        type: 'input',
        name: 'contributeInput',
        message: 'How can others contribute to your project?',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please provide contribution information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testsInput',
        message: 'Provide tests for your application.',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please provide testing information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubInput',
        message: 'Enter your GitHub username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please provide your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emailInput',
        message: 'Enter your email address so others can reach you about additional questions.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email address!');
                return false;
            }
        }
    }
])
.then (answers => {
    const generateREADME = generateMarkdown(answers)
    writeToFile(generateREADME);
})
};

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise ((resolve, reject) => {
        fs.writeFile ('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ({
                ok: true,
                message: 'Created file!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome!');
    questions();
}

// Function call to initialize app
init();