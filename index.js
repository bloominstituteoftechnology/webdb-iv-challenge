const express =  require('express')

const db = require('./data/db')

const server = express()
server.use(express.json())


const PORT = 3300

server.get('/dishes', (req,res) => {
  db('dishes')
  .then(dish => {
    res.status(200).json(dish)
  })
  .catch((err) => {
    res.status(500).json(err)
  })
})

server.listen(PORT, () => {
  console.log(`Server up on ${PORT}`)
})
