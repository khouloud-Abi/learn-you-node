const listFiles = require('./listFiles');
const directory = process.argv[2];
const fileExt = process.argv[3];

listFiles(directory, fileExt, (err, files) => {
  if (err) console.error('There was an error:', err);

  files.forEach(file => {
    console.log(file);
  });
});
