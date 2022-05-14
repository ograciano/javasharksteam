const Server = require('./app/models/server');

require('dotenv').config();

const server = new Server();

server.listen();