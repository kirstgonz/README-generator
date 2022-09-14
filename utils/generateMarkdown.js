let mozilla = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
let apache = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
let mit = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
let unlicense = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  if (license == 'None') {
    return 'no license';
  } else if 
    (license == 'Mozilla') {
    return mozilla
  } else if
    (license == 'Apache') {
      return apache
  } else if
    (license == 'MIT') {
      return mit
  } else if 
    (license == 'Unlicense') {
      return unlicense
  }
  console.log('Im here!')
  };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseData = renderLicense(data.licenseInput)
  return `
  # ${data.title}

  ## Description
  ${data.descriptionInput}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribute](#Contribute)
  - [Tests](#Tests)
  - [Contact Me](#Contact)

  ## Installation
  ${data.installationInput}

  ## Usage
  ${data.usageInput}

  ## License
  This project falls under ${licenseData}.

  ## Contribute
  ${data.contributeInput}

  ## Tests
  ${data.testsInput}

  ## Contact Me!
  - Find my GitHub profile at [${data.githubInput}](https://github.com/${data.githubInput})
  - Email me at [${data.emailInput}](${data.emailInput})
`;
}

module.exports = generateMarkdown;