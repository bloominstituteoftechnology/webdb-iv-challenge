const express = require('express');


const server = express();
const PORT = 5050;

server.use(express.json())


server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}!`)
})