// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)} 
  ## Description ${data.description} 
  ## Table of Content
  1. [Installation](#installation)
  2. [Contribution](#contribution)
  3. [Tests](#tests)
  4. [Questions](#questions)
  ## Installation 
  To install the app run
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contributing}
  ## Tests
  \`\`\`
  ${data.tests}
  \`\`\`
  ## Questions
  If you have any questions, contact me at ${data.email}
  or visit my [GitHub Profile](
  ${data.questions})
  `;
}

module.exports = generateMarkdown;
