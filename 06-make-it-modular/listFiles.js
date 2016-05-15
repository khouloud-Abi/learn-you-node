const fs = require('fs');
const path = require('path');

module.exports = (directory, fileExt, callback) => {
  fileExt = `.${fileExt}`;

  fs.readdir(directory, (err, files) => {
    if (err) return callback(err);

    files = files.filter(file => {
      return path.extname(file) === fileExt;
    });

    callback(null, files);
  });
};
