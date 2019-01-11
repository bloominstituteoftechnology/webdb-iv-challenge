const db = require('../db');

module.exports = {
  getRecipes: () => {
    return query = db('recipes');
  },

  getRecipe: id => {
    return query = db('recipes').where('id', Number(id)).first();
  },

  addRecipe: recipe => {
    return db('recipes').insert(recipe).then(ids => ({ id: ids[0] }));
  }
}