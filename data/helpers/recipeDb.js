const db = require('../dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('recipes');
    if(id){
      query.where('id', Number(id)).first();
    }

    return query;
  }, //get all recipes, or a recipe if id provided
    //needs to be refactored to return other stuff
  insert: function(recipe) {
    return db('recipes')
            .insert(recipe)
            .then(ids => ({ id: ids[0] }));
  }, //adds a recipe
}
