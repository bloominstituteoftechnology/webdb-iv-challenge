const db = require("../data/db");

module.exports = {
  getIngredients: function() {
    let query = db("ingredients");
    return query;
  }
};
