
exports.up = function(knex, Promise) {
  return knex.scema.createTable('recipes', function(tbl) {
      tbl.increments();

      
  })
};

exports.down = function(knex, Promise) {
  
};
