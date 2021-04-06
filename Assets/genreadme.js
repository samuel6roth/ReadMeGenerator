function generateReadme(input) {
    return `
# ${input.project}
  
![badge](https://img.shields.io/badge/license-${input.license}-brightgreen)
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
![badge](https://img.shields.io/badge/license-${input.license}-brightgreen)
- This program used the ${input.license} license. 
## Contributers
${input.contributers}
## Questions & Contact
* GitHub Username: [${input.username}](https://github.com/${input.username})
* Email: ${input.email}`;
}
  
  module.exports = generateReadme;