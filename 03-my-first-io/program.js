const fs = require('fs');

function getNewlinesCount(filePath) {
  return fs.readFileSync(filePath, {encoding: 'utf-8'}).split('\n').length - 1;
}

console.log(getNewlinesCount(process.argv[2]));
