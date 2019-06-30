const express = require('express');
const helmet = require('helmet');
const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)

const server= express()

server.use(helmet());
server.use(express.json())

server.get('/',(req,res)=>{
    res.send('hello')
})

// get dishes
server.get('/api/dishes',(req,res)=>{
    db("Dishes")
    .then( dish => {
        res.status(200).json(dish)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

// post dishes

server.post('/api/dishes', (req,res) => {
    const dish = req.body
    db.insert(dish)
    .into('Dishes')
    .then(addDish => {
        res.status(200).json(addDish)
    })
    .catch(err =>{
        res.status(500).json(err)
    })

})

//
server.get('/api/dishes/:id/recipe' ,(req,res)  => {
const {id} = req.params
db('Recipes') 
.where({dish_id:id})
.then(ids => {
    if (ids) {
      res.status(200).json(ids);
    } else {
      res
        .status(404)
        .json({ error: `Recipe with id of ${id} could not be found `});
    }
  })
  .catch(err => res.status(500).json({ err: "Could not retrieve data" }));

}  )



//

server.get('/api/dishes/:id/recipe/:id2/ingredients' ,(req,res)  => {
    const {id , id2} = req.params
    db('Ingrediants') 
    .where({dish_id:id})
    .where({recipe_id:id2})
    .then(ids => {
        if (ids) {
          res.status(200).json(ids);
        } else {
          res
            .status(404)
            .json({ error: `Recipe with id of ${id} could not be found `});
        }
      })
      .catch(err => res.status(500).json({ err: "Could not retrieve data" }));
    
    }  )
    






// get recipe

server.get("/api/recipes", (req, res) => {
    db('Recipes')
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.send(err));
});




server.listen(9000, () => console.log('api running on 9000'))