const db = require('../dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('recipes');
    if(id){
      query.where('id', Number(id)).first();
    }

    return query;
  }, //get all recipes, or a recipe if id provided
  insert: function(recipe) {
    return db('recipes')
            .insert(recipe)
            .then(ids => ({ id: ids[0] }));
  },
}
