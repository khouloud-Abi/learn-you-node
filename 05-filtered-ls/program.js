const fs = require('fs');
const path = require('path');

function listFiles(directory, fileExt) {
  fileExt = `.${fileExt}`;

  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      if (path.extname(file) === fileExt) {
        console.log(file);
      }
    });
  });
}

listFiles(process.argv[2], process.argv[3]);
