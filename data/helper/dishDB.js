const db = require('../dbConfigure.js');
 module.exports = {
  getDishes: function() {
    return db('dishes');
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
};