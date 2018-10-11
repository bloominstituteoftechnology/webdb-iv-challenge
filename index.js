const db = requre('./dbHelpers');








// const express = require('express');
// const knex = require('knex');
// const server = express();
// server.use(express.json());


// const dbConfig = require('./knexfile.js');
// const db = knex(dbConfig.development);

// server.get('/', (req, res) => {
// res.send('API Running...');
// });






// server.get('/dishes', (req, res) => {
//     db('dishes').then(item => {
//         res.status(200).json(item)
//     }).catch((fail) => {
//         console.log(fail);
//         res.status(500).json({ error: "There was an error while receiving the dishes" });
//     })
// })

// server.post('/dishes', (req, res) => {
//     const item = req.body;

//     db('dishes').insert(item)
//         .then((ids)=> { 
//           res.status(201).json(ids);
//         })
//                 .catch((fail) => {
//                     console.log(fail);
//                     res.status(500).json({ error: "There was an error while saving the recipe to the database." });
//                 });
// });







// const port = 2100;
// server.listen(port, function() {
// console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
// });
