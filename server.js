const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('./data/db');


const server = express();

server.use(express.json());

server.use(morgan('dev'));


server.get('/', (req, res) => {
	res.send('Welcome, testing...');

});


server.get('/api/dishes', (req, res)=>{
	
	db('dish')
	.then(response => {
                res.status(200).json(response);
        })

        .catch(err => res.status(500).json({errorMessage: "There was an error whil retrieving dishes from the database"}));

});


server.get('/api/recipes', (req, res)=>{

        db('recipe')
        .then(response => {
                res.status(200).json(response);
        })

        .catch(err => res.status(500).json({errorMessage: "There was an error while retrieving recipes from the database"}));

});





server.get('/api/dishes/:id', (req, res) => {

        const id = req.params.id;

         db('dish')
        .where('id',id)
        .then(response => {
                if(response.length ===0) res.status(404).json({message: "Dish with the specified ID does not exist." })
                else res.status(200).json(response);
        })

        .catch(err => res.status(500).json({errorMessage: "The dish with the specified id could not be retrieved from the database"}));

});


server.post('/api/dishes', (req, res) => {

        const {name} = req.body;
        console.log(name);

        if(!name) res.status(400).json({errorMessage: "Please provide a name for the dish."});

        else{

        const dish = {name: name};
        console.log(req.body);
        
	db.insert(dish)
        .into('dish')
        .then(ids => {
                const id= ids[0];
                res.status(200).json({id, ...dish});
        })

        .catch(err => res.status(500).json(err));
        }
});


server.use(function(req, res) {
  res.status(404).send("Wrong path. Please provide a correct url");
});




server.listen(4000, ()=> console.log('API running on port 4000'));
