const http = require('http');

function getContent(url) {
  http.get(url, res => {
    res.setEncoding('utf-8');
    res.on('data', console.log);
    res.on('error', console.error);
  }).on('error', console.error);
}

getContent(process.argv[2]);
