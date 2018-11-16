const server = require('express')()
require('./middleware')(server)
require('./components/dishes/')(server)
require('./components/recipes')(server)

server.listen(9000, () => console.log('\n=== Port is open ===\n'))
