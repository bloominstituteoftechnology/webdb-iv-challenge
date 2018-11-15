//insted of having index just initalize db calls here:
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile.js')

const db = knex(dbConfig.development);


//-----------------METHODS---------------------------//
function getDishes(){
	return db('dishes')
}

//dish is the object being passed
function addDish(dish){
	return db('dishes')
  .insert(dish)
}

//with list of related recipes
function getDish(id){
	return db('dishes')
  .join('recipes', 'recipes.dish_id', 'dishes.id')
  .where({'dishes.id': id})
}


function getRecipes(){
	return db('recipes')
}

function addRecipe(recipe){
	return db('recipes').insert(recipe)
}
