const express = require('express');

const db = require('./dbAccessHelpers');

const server = express();

//middleware
server.use(express.json());

db.getDishes()
    .then(dishes => {
        console.log('dishes:', dishes);
    })
    .catch(err);

server.listen(9000, () => console.log('\n== API on port 9k ==\n'));