const repl = require('repl');

module.exports = (socket, buildMessage) => {
  repl.start({
    prompt: '',
    eval: (text) => {
      const message = buildMessage(text);
      socket.send(message);
    },
  });
};
