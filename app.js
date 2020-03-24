const args = require('minimist')(process.argv.slice(2));
const SERVER_HOST = args['host'];
const USERNAME = args['user'];

const socket = require('socket.io-client')(SERVER_HOST);

const buildMessage = require('./utils/buildMessage')(USERNAME);
const startRepl = require('./utils/startRepl');
const printMessage = require('./utils/printMessage');

socket.on('connect', () => {
  console.log(`Connected to server at ${SERVER_HOST}`);

  startRepl(socket, buildMessage);
});

socket.on('message', printMessage);
