const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')

const dishRouter = require('./routes/dishRouter')
const recipeRouter = require('./routes/recipeRouter')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(helmet())

app.use('/dishes', dishRouter)
app.use('/recipes', recipeRouter)

app.get('/', (req, res) => {
  res.status(200).send('The Server Listens and Obeys')
})

const port = 3035
app.listen(port, () => console.log(`\n Server Online: Keep Coding\n`))
