const db = require('../db');

module.exports = {
  getDishes: () => {
    return query = db('dishes');
  },

  getDish: id => {
    return query = db('dishes').where('id', Number(id)).first();
  },

  addDish: dish => {
    return db('dishes').insert(dish).then(ids => ({ id: ids[0] }));
  }
}