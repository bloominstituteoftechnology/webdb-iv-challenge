const express=require('express');
const server=express();
const knex=require('knex');
const dbConfig=require('./knexfile.js');
const dbr=require('./database/modelRecipe.js');
const db=knex(dbConfig.development);
const PORT=process.env.PORT || 8000;

server.use(express.json());

dbr.getDish(7)
  .then(dish => {
    console.log(dish);
  })



server.listen(PORT, () => console.log(`API running on port ${PORT}`));