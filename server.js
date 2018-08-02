const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('The Server Listens and Obeys')
})

const port = 3035

app.listen(port, () => console.log(`\n Server Online: Keep Coding\n`))
