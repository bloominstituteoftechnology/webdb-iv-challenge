const server = require('./server.js');
const port = 5012;

server.listen(port, function() {
    console.log('server connected on port 5012');
});