var fs = require('fs');

var contents = fs.readFileSync('icons/font/icons.woff.base64', 'utf8');

module.exports = {
  files: 'packages/icons/generated/_icons.scss',
  from: new RegExp(/(?<=icons-base64: ")(.*)(?=";)/g),
  to: contents,
};