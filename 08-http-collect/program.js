const http = require('http');

function getContent(url) {
  let results = '';

  http.get(url, res => {
    res.setEncoding('utf-8');
    res.on('data', chunk => {
      results += chunk;
    });
    res.on('end', () => {
      console.log(results.length);
      console.log(results);
    });
    res.on('error', console.error);
  }).on('error', console.error);
}

getContent(process.argv[2]);
