const db = require('../dbConfig')
module.exports = {
  getDishes: function (id) {
    let query = db('dishes as d')
    if (id) {
      query
        .select('d')
    }
  }
}