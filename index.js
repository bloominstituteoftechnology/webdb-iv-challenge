const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('Server UP')
})

const port = 8000
server.listen(port, () => console.log(`Server is up at port ${port}`))