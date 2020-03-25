const args = require('minimist')(process.argv.slice(2));
const SERVER_HOST = args['host'];
const USERNAME = args['user'];

const socket = require('socket.io-client')(SERVER_HOST);

const buildMessage = require('./utils/buildMessage')(USERNAME);
const printMessage = require('./utils/printMessage');
const startReadline = require('./startReadline');

socket.on('connect', () => {
  console.log(`Connected to server at ${SERVER_HOST}`);

  startReadline(socket, buildMessage);
});

socket.on('message', printMessage);
