const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getInstructions,
  addInstructions,
};

function getInstructions() {
  return db("instructions");
}

function addInstructions(dishes) {
  return db("instructions")
    .insert(dishes)
    .into("instructions");
}
