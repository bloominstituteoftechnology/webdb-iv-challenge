const db = require("../data/db");

module.exports = {
  getDishes: function() {
    let query = db("dishes");
    return query;
  },
  addDish: function(dish) {
    return db("dishes")
      .insert(dish)
      .then(ids => ({ ids: ids[0] }));
  },
  getDish: function(id) {
    if (id) {
      query.where("id", id).first();
    }
  }
};
