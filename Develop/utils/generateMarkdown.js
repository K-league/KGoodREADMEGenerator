// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (questions.license === 'BSD') {

    // console.log(`[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`);

  } else {

    console.log('BSD badge not found.')

  }



}
//what is license user chose
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (questions.license === 'MIT') {
    // console.log(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`)

  } else {

    console.log('MIT badge not found.')
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (questions.name.choices[2] === 'GNU') {

  } else {
    console.log('GNU Badge not found.')

  }


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents

## Installation
${data.instalation}

## Usage Information
${data.usage}

## License
${data.license}

## Contributing
${data.contributors}

## Tests
${data.test}

## Questions? Contact me.
${data.question}
  
  
`;
}

module.exports = generateMarkdown;
