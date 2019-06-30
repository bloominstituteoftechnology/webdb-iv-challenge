const express = require('express');
const port = 5555;
const server = express();
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'))
server.use(cors())

const dishesRoutes = require('./Routes/dishesRoutes')
const recipesRoutes = require('./Routes/recipesRoutes')

server.use('/dishes', dishesRoutes)
server.use('/recipes', recipesRoutes)


server.listen(port, () => console.log(`server running on port 5555`));
