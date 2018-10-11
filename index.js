const express = require('express');
applyGlobalMiddleware = require('./config/middleware/global.js');

const server = express();
const port = 5000;

applyGlobalMiddleware(server);

server.get('/api/recipes/', (req, res) => {
	res.send('GET all the recipes');
});

server.listen(port, () => { console.log(`\n=== Listening on port ${ port } ===`) });
