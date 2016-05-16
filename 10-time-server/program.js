const net = require('net');

function addZero(i) {
  if (i < 10) i = `0${i}`;

  return i;
}

function getCurrentDate() {
  let date = new Date();

  return date.getFullYear() + '-' +
    addZero(date.getMonth() + 1) + '-' +
    addZero(date.getDate()) + ' ' +
    addZero(date.getHours()) + ':' +
    addZero(date.getMinutes());
}

const server = net.createServer(socket => {
  socket.write(getCurrentDate());
  socket.end('\n');
});

server.listen(Number(process.argv[2]));
