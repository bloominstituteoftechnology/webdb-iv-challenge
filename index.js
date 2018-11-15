const express = require('express');
const server = express();

server.get('/', (req, res) => res.send({"API": "live"}))

const port = process.env.PORT || 9000
server.listen(port, () => console.log(`Port running on http://localhost:${port}`))