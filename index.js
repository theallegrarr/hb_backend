/* eslint-disable no-console */
const server = require('./api/server.js');

const PORT = 8080;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
