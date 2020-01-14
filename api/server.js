const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const usersRouter = require('../routes/user');

server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: "It's alive!" });
});

module.exports = server;
