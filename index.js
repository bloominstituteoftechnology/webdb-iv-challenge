const server = require('./api/server')

const port = process.env.Port || 4000;

server.listen(port, () => console.log(`\n ApI running on port ${port}\n`))