const db = require('./db');

module.exports = {
  getDishes
};

function getDishes() {
  return db('dishes');
}
