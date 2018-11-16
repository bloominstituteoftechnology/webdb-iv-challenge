const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);
module.exports = {
  getShoppingList
};
function getShoppingList() {
  return db("ingredients").where({ id: Number(id) });
}
