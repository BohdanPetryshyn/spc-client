const readline = require('readline');

module.exports = (socket, buildMessage) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', input => {
    const message = buildMessage(input);
    socket.send(message);
  });
};
