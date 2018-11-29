const express = require ('express');
const helmet = require ('helmet');
const morgan = require ('morgan');
const db = require ('./data/db');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});

server.get('/dishes', (req, res) => {
    db.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(error => res.status(500).json({ message: 'Could Not Retrieve Dishes', error }))
});

server.get('/dishes/:id', (req, res) => {
    const { id } = req.params; 
    db.getDish(id)
    .then(dish => res.status(201).json(dish))
    .catch(error => res.status(500).json({ message: 'No Way That Dish Exists', error }))
});

server.get('/recipes', (req, res) => {
    db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(500).json({ message: 'Could Not Get Recipes', error }))
});

server.post('/dishes', async (req, res) => {
    console.log('Body: ', req.body);
    try {
        const dishData = req.body;
        const dishId = await db.addDish(dishData);
        const dish = await db.getDish(dishId.id);
        res.status(201).json(dish);
    } catch (error) {
        res.status(500).json({ message: `error in creating dish ${dish}`, error })
    }
});

server.post('/recipes', async (req, res) => {
    console.log('Body: ', req.body);
    try {
        const recipeData = req.body;
        const recipeId = await db.addDish(recipeData);
        const recipe = await db.getRecipe(recipeId.id);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ message: `error in creating recipe ${recipe}`, error })
    }
});

server.delete('/dishes/:id', (req, res) => {
    db.removeDish(req.params.id)
    .then(count => {
        if (count) {
         res.status(204).json({ message: `${count} dish was deleted` });   
        } else {res.status(404).json({ message: `404 ${count} dish not found` })}
        
    })
    .catch(error => {
        res.status(500).json( { message: "There was an error deleting dish", error } )
    })
})

server.delete('/recipe/:id', (req, res) => {
    db.removeRecipe(req.params.id)
    .then(count => {
        if (count) {
         res.status(204).json({ message: `${count} recipe was deleted` });   
        } else {res.status(404).json({ message: `404 ${count} recipe not found` })}
        
    })
    .catch(error => {
        res.status(500).json( { message: "There was an error deleting recipe", error } )
    })
})

server.put('/dishes/:id', (req, res) => {
    db.updateDish(req.params.id, req.body)
    .then(count => {
        if(count){
        res.status(200).json(`${count} dish was updated`)     
        } else{ res.status(404).json({ message: 'dish does not exist' }) }
       
    })
    .catch(error => {
        res.status(500).json({ message: 'Error Updating The dish', error })
    })
})

server.put('/recipe/:id', (req, res) => {
    db.updateRecipe(req.params.id, req.body)
    .then(count => {
        if(count){
        res.status(200).json(`${count} recipe was updated`)     
        } else{ res.status(404).json({ message: 'recipe does not exist' }) }
       
    })
    .catch(error => {
        res.status(500).json({ message: 'Error Updating The Recipe', error })
    })
})

server.listen(1337, function(){
    const port = 1337;
    console.log(`\n === API Listening On Domain http://localhost:${port} === \n`)
});