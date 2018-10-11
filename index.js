const express = require('express');
const helmet = require('helmet');
const recipesRoutes = require('./recipes/recipesRoutes');
const server = express();

server.use(helmet());
server.use(express.json());

//SANITY CHECK
server.get('/', (req, res)=> {
    res.send('Your server is working'
    )
})

server.use('/dish', recipesRoutes);

server.listen(8888, ()=> console.log(` \n Server is running on 8888 \n `))