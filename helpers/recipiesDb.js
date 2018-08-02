const db = require("../data/db");

module.exports = {
  getRecipies: function() {
    let query = db("recipies");
    return query;
  },
  addRecipies: function(recipie) {
    return db("recipies")
      .insert(recipie)
      .then(ids => ({ ids: ids[0] }));
  },
  getRecipie: function(id) {
    if (id) {
      query.where("id", id).first();
    }
  }
};
