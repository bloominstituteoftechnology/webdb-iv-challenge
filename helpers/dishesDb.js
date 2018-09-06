const db = require("../data/db");

module.exports = {
  getDishes: function() {
    let query = db("dishes");
    return query;
  },
  addDish: function(dish) {
    return db("dishes")
      .insert(dish)
      .into("dishes")
      .then(ids => ({ id: ids[0] }));
  },
  getDish: function(id) {
    let query = db("dishes")
      .join("recipies", "dishes.id", "=", "recipies.dishes_Id")
      .select("dishes.id", "dishes.Name", "recipies.name")
      //why doesnt it return name default to not provided
      .where("dishes.id", id);
    console.log(query);
    return query;
  }
};
