const express = require('express');

const server = express();
const exps = require('./data/helpers/exports');

/* ---------- Middleware ---------- */
server.use(express.json());


/* ---------- Endpoints ---------- */

// getDishes:
server.get('/api/dishes', (req,res) => {
  exps.getDishes()
    .then( dishes => {
      res.json(dishes);
    })
    .catch( err => {
      res.status(500).json({ error: "Could not get dishes." });
    });
});

//addDish:
server.post('/api/dishes', (req,res) => {
  const dish = req.body;

  if( dish.dish ){
    exps.addDish(dish)
      .then( ids => {
        res.json(ids);
      })
      .catch( err => {
        res.status(500).json({ error: "Could not add dish."});
      });
    // end-exps
  } else {
    res.status(400).json({ error: "Please provide a name for the dish." });
  }
  
});

// getDish:
server.get('/api/dishes/:id', (req,res) => {
  const {id} = req.params;
  exps.getDish(id)
    .then( (recs) => {
      res.json(recs);
    })
    .catch( (err) => {
      res.status(500).json({ error: err});
    });
  //end-exps
});

// getRecipes:
server.get('/api/recipes', (req,res) => {
  exps.getRecipes()
    .then( (recs) => {
      res.json(recs);
    })
    .catch( (err) => {
      res.status(500).json({ error: err});
    })
});

/* ---------- Listener ---------- */
const port = 5454;
server.listen(port, function() {
  console.log(`\n=== Web API listening on http://localhost:${port} ===\n`);
});