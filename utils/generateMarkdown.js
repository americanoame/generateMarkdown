// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
    if (license !== 'None' && color !== 'n/a') {  // not available: not applicable:
        return `![GitHub license](https://img.shields.io/badge/${license}-${color}yellow.svg)`
       
    }           
    return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None' && color !== 'n/a') {
        return `\n* - [License](#license) \n*`
        
    };
    return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None' && color !== 'n/a') {
        return `## License`
             
    };
    return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.heading}

  ## 📖 Description
  ${data.description}

  ## 🛠 Installation
  ${data.installation}

  ## usage
  ${data.usage}

[![americanoame](https://github.com/americanoame/My-Portfolio)](${data.website} 'My personal website)')

[![@${data.twitter}][twitter-image]] [https://twitter.com/${data.twitter}]

## ⚖️
  
Generously distributed under the *${data.license}* 

  ${renderLicenseBadge(data.license, data.color)}
`
};

module.exports = generateMarkdown;



