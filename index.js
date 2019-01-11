const express = require('express');
const server = express();

const dishesRouter = require('./routes/dishesRouter')

const PORT = process.env.PORT || 3400;

server.use(express.json());

//GET

server.use('/dishes', dishesRouter);


//SERVER

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});

