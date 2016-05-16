const http = require('http');
const after = require('after');
const next = after(3, logContent);
const urls = process.argv.splice(2);
let allContent = [];

function getContent(url, index) {
  let content = '';

  http.get(url, res => {
    res.setEncoding('utf-8');
    res.on('data', chunk => {
      content += chunk;
    });
    res.on('end', () => {
      allContent[index] = content;
      next(null, allContent);
    });
    res.on('error', console.error);
  }).on('error', console.error);
}

function logContent(err, allContent) {
  allContent.forEach(content => {
    console.log(content);
  });
}

urls.forEach((currentUrl, currentIndex) => {
  getContent(currentUrl, currentIndex);
});
