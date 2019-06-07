const db = require('./data/db_model');
const express = require('express');

const server = express();

server.use(express.json());

// endpoints here
const port = 3000; 

server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});

server.get("/api/recipies/",
    (req,res) => db.find("recipies").then(result => res.status(200).json(result)).catch(err=>res.status(500).json({error: err, message:"could not fetch recipies"}))
);
server.get("/api/ingredients/",
    (req,res) => db.find("ingredients").then(result => res.status(200).json(result)).catch(err=>res.status(500).json({error: err, message:"could not fetch ingredients"}))
);
server.get("/api/dishes/",
    (req,res) => db.find("dishes").then(result => res.status(200).json(result)).catch(err=>res.status(500).json({error: err, message:"could not fetch dishes"}))
);

server.get("/api/recipies/:id",
    (req,res) => db.findRecipie(req.params.id).then(result => res.status(200).json(result)).catch(err=>res.status(500).json({error: err, message:"could not fetch recipies"}))
);
server.get("/api/ingredients/:id",
    (req,res) => db.find("ingredients", req.params.id).then(result => res.status(200).json(result)).catch(err=>res.status(500).json({error: err, message:"could not fetch ingredients"}))
);
server.get("/api/dishes/:id",
    (req,res) => db.find("dishes", req.params.id).then(result => res.status(200).json(result)).catch(err=>res.status(500).json({error: err, message:"could not fetch dishes"}))
);

server.post("/api/dishes/",
    (req,res) => db.add("dishes", req.body).then(result => res.status(200).json({id: result})).catch(err=>res.status(500).json({error: err, message:"could not fetch dishes"}))
);
server.post("/api/dishes/",
    (req,res) => db.add("recipies",  req.body).then(result => res.status(200).json({id: result})).catch(err=>res.status(500).json({error: err, message:"could not fetch recipies"}))
);