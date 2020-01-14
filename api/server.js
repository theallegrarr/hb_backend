const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const usersRoute = require('../routes/user');
const patchRoute = require('../routes/jsonpatch');

server.use('/api/users', usersRoute);
server.use('/api/patch', patchRoute);

server.get('/', (req, res) => {
  res.status(200).json({ message: "It's alive!" });
});

module.exports = server;
