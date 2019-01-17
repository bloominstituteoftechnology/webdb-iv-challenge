const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../../knexfile.js');

//connection to the data base
const db = knex(knexConfig.development);

function findRecepies() {
    return db('recepies');
}

function addRecepies(recepie){
    return db('recepies')
    .insert(recepie)
    .into('recepies');
}

// endpoints here for the recepies

//POST /api/recepies
router.post('/', async (req, res) => {
    try {
      const recepie = req.body;
      if(recepie.name.length > 0){
        const newRecepie = await addRecepies(recepie);
        res.status(200).json(newRecepie);
      } else {
        res.status(404).json({message: "Please enter the name of the recepie"});
      }
    }
    catch (err) {
      res.status(500).json({message: "There was an error while trying to save a recepie to the data base"});
    }
  });
  
  
  //GET /api/dishes
  router.get('/', async (req, res) => {
    try {
      const recepiesList  = await findRecepies();
      res.status(200).json(recepiesList);
    }
    catch (err) {
      res.status(500).json({message: "There was an error while trying to connect to the data base"});
    }
  });

  module.exports = router;

