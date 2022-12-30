// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
    if (license !== 'None' && color !== 'n/a') {  // not available: not applicable:
        return `![GitHub license](https://img.shields.io/badge/${license}-yellow.svg)`

    }
    return '';
};

// function to render the license link
function renderLicenseLink(license) {
    if (license !== 'None' && color !== 'n/a') {
        return `\n* - [License](#license) \n*`

    };
    return '';
};

function renderLicenseSection(license) {
    if (license !== 'None' && color !== 'n/a') {
        return `## License`

    };
    return '';
};

function generateMarkdown(data) {
    return `# ${data.generateMarkdown}
    

  ## 📖 Description
  ${data.Description}

  ## Table of Contents
* [Installation](#Installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Contact](#contact)

## 🛠 Installation
  ${data.Installation}

  ## usage
  ${data.Usage}
 
## ⚖️ License
  
[MIT License](https://opensource.org/Licenses/MIT)

## Contribution

## Test
${data.test}

## npm i
${data.npm}

## Questions 
### Contact me at: Andrenation@gmail.com

### Link for video: https://watch.screencastify.com/v/QbMJvHfxk6Z31PmfKv5P
`
};

module.exports = generateMarkdown;



