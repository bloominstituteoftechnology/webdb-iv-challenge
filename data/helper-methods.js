const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const getDishes =()=>{
    return db("dish");
}

const getRecipes =()=>{
  return db("recipe");
}

const getDish = (id) =>{
  if(id) {
    return db('dish')
        .where({id})
        .first();
  } else {
      return db('dish');
  }
}

const addDish = (dish) =>{
    return db
          .insert(dish)
          .into('dish');
}

module.exports = {
  getDishes,
  getDish,
  addDish,
  getRecipes
};