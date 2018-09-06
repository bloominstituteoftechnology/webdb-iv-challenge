const db = require('../dbConfig.js');

module.exports = {
  get: function(id) {
    let query = db('dishes');
    if(id){
      query.where('id', Number(id)).first();
    }

    return query;
  }, //get's all dishes, or dish by id if provided
  insert: function(dish) {
    return db('dishes')
            .insert(dish)
            .then(ids => ({ id: ids[0] }));
  },
};
