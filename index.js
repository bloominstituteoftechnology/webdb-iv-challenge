//create server
const express = require('express');
const server = express();


//Built-in middleware
server.use(express.json());



//Grab route handlers/endpoints
const dishesRoutes = require('./routers/dishesRouter');
server.use('/api/dishes', dishesRoutes);
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