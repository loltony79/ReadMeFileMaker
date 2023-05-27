// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "Apache") {
      return "https://camo.githubusercontent.com/c7c91ba0c808b97b0984050381736d8abae1fa27f0670ee27e9b2ad25ed2d938/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4170616368655f322e302d79656c6c6f77677265656e2e737667";
    } else if (license === "Boost") {
      return "https://camo.githubusercontent.com/20357fe3aa8a0ebe5a980d67d43b141a10c027701cce904e9e001ef3331ceeb8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d426f6f73745f312e302d6c69676874626c75652e737667";
    } else if (license === "") {
      return;
    }
    return;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "Apache") {
      return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "Boost") {
      return "https://www.boost.org/LICENSE_1_0.txt";
    } else if (license === "") {
      return;
    }
    return "";
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === "Apache") {
      return `## License \n\n![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    } else if (license === "Boost") {
      return `## License \n\n![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    } else if (license === "") {
      return;
    }
    return "## License \n\n![License](Unknown)";
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    
    return `# Project name: ${data.title} \n\n## Description \n\n${data.description} 
    \n## Table of Contents \n\n- [Installation](#installation) \n- [Usage](#usage) \n- [Credits](#credits) \n- [License](#license) \n\n## Installation 
    \n${data.installation} \n\n## Usage \n\n${data.usage} \n\n## Github \n\n${data.github} \n\n## Email: \n\n${data.email}
    \n## How to Contribute \n\n${data.contribution} \n\n${renderLicenseSection(data.license)} \n\n## Test: \n\n${data.test} \n\n`
  
  }
  
  module.exports = generateMarkdown;
  