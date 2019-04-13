const express = require('express');

const db = require('./data/db.js');

const server = express();
server.use(express.json());

server.get('/api/dishes', (req, res)=>{
    db.getDishes()
    .then(dishes=>{
        res.json(dishes);
    })
    .catch(err=>{
        res.status(500).json({error: 'Failed to retrieve dishes'});
    })
})

server.get('/api/recipes', (req, res)=>{
    db.getRecipes()
    .then(recipes=>{
        res.json(recipes);
    })
    .catch(err=>{
        res.status(500).json({error: 'Failed to retrieve recipes'});
    })
})

server.post('/api/dishes', (req, res)=>{
    const body = req.body;
    if(body.dish_name){
        db.addDish(body)
        .then(id=>{
            console.log(id)
            res.json({id: id.id});
        })
        .catch(err=>{
            console.log("return error")
            res.status(500).json({error: 'Failed to add dish'});
        })
    }
    else{
        res.status(400).json({errorMessage: 'Please provide the dish name'})
    }
})

server.get('/api/dishes/:id', (req, res)=>{
    const {id} = req.params;
    db.getDish(id)
    .then(data=>{
        console.log(data);
        res.json({msg: "Testing"})
    })
})

server.post('/api/recipes', (req, res)=>{
    const body = req.body;
    if(body.recipe_name && body.dishes_id){
        db.addRecipe(body)
        .then(id=>{
            res.json({id: id.id});
        })
        .catch(err=>{
            res.status(500).json({error: 'Failed to add recipe'});
        })
    }
    else{
        res.status(400).json({errorMessage: 'Please provide the dish name'})
    }
})

server.listen(5000, ()=>{
    console.log('Starting server');
})