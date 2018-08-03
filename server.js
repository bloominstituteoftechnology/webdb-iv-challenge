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

const PORT = 3035
app.listen(PORT, () => console.log(`\n === Server Online using PORT ${PORT} --- Keep Coding!!! ===\n`))
