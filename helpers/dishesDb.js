const db = require('../data/db');

module.exports = {
    getDishes: function()  {
        let query = db('dishes');
       return query; 
    },

    getDish: function(id) {
        let query = db('dishes');
    if (id) {
      query.where('id', Number(id)).first();
    }
    return query;
    },
    addDish: function(dish) {
    return db('dishes')
      .insert(dish)
      .then(ids => ({ id: ids[0] }));
  },


}