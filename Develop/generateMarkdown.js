// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';

  switch (license) {
    case 'The MIT License':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Zero-Clause BSD':
      badge = '[![License: 0BSD](https://img.shields.io/badge/License-0BSD-brightgreen.svg)](https://opensource.org/licenses/0BSD)';
      break;
    case 'Artistic License 2.0':
      badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-5.32-brightgreen.svg)](https://opensource.org/licenses/Artistic-2.0)';
      break;
    case 'None':
      badge = '';
      break;
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'The MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'Zero-Clause BSD':
      return 'https://opensource.org/licenses/0BSD';
    case 'Artistic License 2.0':
      return 'https://opensource.org/licenses/Artistic-2.0';
    case 'None':
      return '';
  }
}

// Export the functions
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
}
