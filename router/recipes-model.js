const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("recipes")
    .join("dishes", "recipes.dish_id", "=", "dishes.id")
    .select("recipes.id", "recipes.name", "recipes.instructions", {
      dish: "dishes.name"
    });
}

function findById(id) {
  return db("recipes")
    .where({ "recipes.dish_id":id })
    .first()
    .join("dishes", "recipes.dish_id", "=", "dishes.id")
    .select("recipes.id", "recipes.name", "recipes.instructions", {
      dish: "dishes.name"
    });
}

function add(recipe) {
  return db("recipes")
    .insert(recipe, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db("recipes")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db("recipes")
    .where({ id })
    .del();
}
