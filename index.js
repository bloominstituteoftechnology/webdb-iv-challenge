const express = require('express');
const server = express();

const dishesDb = require('./data/dishesModel');

// const cohortRouter = require('./routes/cohortRoutes');
// const studentRouter = require('./routes/studentRoutes');

const PORT = process.env.PORT || 3400;

server.use(express.json());


const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

//GET

// server.use('/cohorts', cohortRouter);

// server.use('/students', studentRouter);

server.get('/', (req, res) => {
    dishesDb.get()
      .then(dishes => {
        res.json(dishes)
      })
      .catch(err => {
          console.log('error:', err);
        res.status(500).json({ message: "Could not fetch Dishes" })
      })
  });
  
  
  server.get('/:id', (req, res) => {
    const {id} = req.params;
    dishesDb.get(id)
      .then(dish => {
        if(Object.keys(dish).length === 0){
          res.status(404).json({ message: "Invalid Dish ID" })
        } else {
          res.json(dish)
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Could not find that Dish" })
      })
  });

  server.post('/', (req, res) => {
      const dish = req.body;
      if(dish.dish_name){
          dishesDb.add(dish)
            .then(newDish => {
                res.status(201).json(newDish)
            })
            .catch(err => {
                res.status(500).json({ message: "Unable to add this new dish." })
            })
      } else{
          res.status(400).json({ message: "New dishes require a name" })
      }
  })

//SERVER

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});