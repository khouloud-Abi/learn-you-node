const http = require('http');
const portNumber = Number(process.argv[2]);

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let bodyUppercase = '';

    req.setEncoding('utf-8');
    req.on('data', chunk => {
      bodyUppercase += chunk.toUpperCase();
    });
    req.on('end', () => {
      res.end(bodyUppercase);
    });
  } else {
    res.end('Send me a POST\n');
  }
});

server.listen(portNumber);
