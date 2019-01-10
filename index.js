//create server
const express = require('express');
const server = express();

//create knex/db connection
const knex = require('knex');
const dbConfig = require('./knexfile');
db = knex(dbConfig.development);

//Built-in middleware
server.use(express.json());

//Grab route handlers/endpoints
// const zoosRoutes = require('./routers/zoosRouter')
// server.use('/api/zoos', zoosRoutes);
// const bearsRoutes = require('./routers/bearsRouter')
// server.use('/api/bears', bearsRoutes);

// server.get('/api/', (req,res) =>{
//     res.json("Hello There")
// })


//listener
const PORT = 4000;
server.listen(PORT, function(){
    console.log(`Server up and running on port${PORT}`);
});