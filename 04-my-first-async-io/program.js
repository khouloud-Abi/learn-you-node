const fs = require('fs');

function getNewlinesCount(filePath) {
  fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;

    console.log(data.split('\n').length - 1);
  });
}

getNewlinesCount(process.argv[2]);
