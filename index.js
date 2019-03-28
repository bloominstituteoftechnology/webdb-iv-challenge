const server = require('server');

server.get('/', (req, res) => {
  res.send('hello world. yeah this is working')
})