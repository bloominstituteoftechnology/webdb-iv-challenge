const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const apiRoutes = require('./api/apiRoutes');

const server = express();
server.use(express.json());
server.use(cors({}));
server.use(helmet());

server.use('/api', apiRoutes);

const PORT = 8000;
server.listen(PORT, () => console.log(`SERVER - PORT: ${PORT} - LISTENING`));
