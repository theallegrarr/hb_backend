const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const usersRoute = require('../routes/user');
const patchRoute = require('../routes/jsonpatch');
const imageRoute = require('../routes/image');

server.use('/api/v1/users', usersRoute);
server.use('/api/v1/patch', patchRoute);
server.use('/api/v1/image', imageRoute);

server.get('/', (req, res) => {
  res.status(200).json({ message: "It's alive!" });
});

module.exports = server;
