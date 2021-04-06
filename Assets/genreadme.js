function generateReadme(input) {
    return `
# ${input.project}
  
![GitHub](https://img.shields.io/github/license/samuel6roth/ReadMeGenerator?color=blue)
## Description
${input.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [License](#license)
* [Contributers](#contributers)
## Installation
${input.installation}
## License
![GitHub](https://img.shields.io/github/license/samuel6roth/ReadMeGenerator?color=blue)
- This program used the ${input.license} license. 
## Contributers
${input.contributers}
## Questions & Contact
* GitHub Username: [${input.username}](https://github.com/${input.username})
* Email: ${input.email}`;
}
  
  module.exports = generateReadme;