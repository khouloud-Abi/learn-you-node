const http = require('http');
const url = require('url');
const portNumber = Number(process.argv[2]);

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixTime(time) {
  return {
    unixtime: time.getTime()
  };
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const urlParse = url.parse(req.url, true);
    const time = new Date(urlParse.query.iso);
    let result;

    switch (urlParse.pathname) {
    case '/api/parsetime':
      result = parseTime(time);
      break;
    case '/api/unixtime':
      result = unixTime(time);
      break;
    }

    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(result));
  }

  res.end();
});

server.listen(portNumber);
