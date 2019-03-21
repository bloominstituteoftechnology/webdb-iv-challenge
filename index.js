const morgan=require('morgan');
const helmet=require('helmet');
const express=require('express');
const server=express();
const knex=require('knex');
const dbConfig=require('./knexfile');
const db=knex(dbConfig.development);

server.use(express.json()).use(morgan('dev')).use(helmet());

getDishes=server.get('/api/dishes',(req,res)=>{
    db('dishes')
        .then(dishes=>res.status(200).json(dishes))
        .catch(err=>res.status(500).json(err));
})
addDish=server.post('/api/dishes',(req,res)=>{
    const dish=req.body;
    db.insert(dish)
        .into('dishes')
        .then(id=>res.status(201).json(id))
        .catch(err=>res.status(500).json(err))
})
getDish=server.get('/api/dishes/:id',(req,res)=>{
    db('dishes')
        .join('recipes',{'dishes.id':'recipes.dish_id'})
        .select('dishes.name as dish','recipes.name as recipe')
        .where({'recipes.dish_id':req.params.id})
        .then(dish=>{
            let recipes='';
            for (let i=0; i<dish.length; i++) {
                i===0?recipes+=dish[i].recipe:recipes+=`, ${dish[i].recipe}`
            }
            const dishListing={dish:dish[0].dish,recipes:recipes}
            res.status(200).json(dishListing)})
        .catch(err=>res.status(500).json(err));
})
getRecipes=server.get('/api/recipes',(req,res)=>{
    db('recipes')
        .join('dishes',{'dishes.id':'recipes.dish_id'})
        .select('dishes.name as dish','recipes.name as recipe')
        .then(response=>res.status(200).json(response))
        .catch(err=>res.status(500).json(err))
})
addRecipe=server.post('/api/recipes',(req,res)=>{
    const recipe=req.body;
    db.insert(recipe)
        .into('recipes')
        .then(id=>res.status(201).json(id))
        .catch(err=>res.status(500).json(err))
})
const port=9000;
server.listen(port,()=>console.log('Engines firing server starting new horizons venturing.'))