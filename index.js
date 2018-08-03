//imports
const express = require('express');
const morgan = require('morgan');

//initialize server
const server = express();


//middleware
server.use(express.json());
server.use(morgan('dev'));



server.listen(8000, () => console.log('\n ====API RUNNING===\n'))