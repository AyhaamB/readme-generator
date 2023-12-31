// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Enter license information:',
    choices: ['The MIT License','Zero-Clause BSD','Artistic License 2.0','None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contributing guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your contact email:',
  },
];


// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully wrote ${fileName}`);
    }
  });
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = 
    
`# ${answers.title} ${generateMarkdown.renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}
${generateMarkdown.renderLicenseLink(answers.license)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions or concrens, reach me at ${answers.email}. View my github profile at https://github.com/${answers.github}`;

    // Write the content to a README.md file
    writeToFile('README.md', readmeContent);
  });
}


// Function call to initialize app
init();

