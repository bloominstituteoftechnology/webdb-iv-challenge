const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => res.json('Server is up and running!'));

const port = 6000;

server.listen(port, () => console.log(`API is running on port ${port}`));
