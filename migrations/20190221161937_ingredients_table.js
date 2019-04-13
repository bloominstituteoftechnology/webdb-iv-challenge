
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl){
    tbl.increments('ingredient_id');
    tbl.string('ingredient_name', 60).notNullable().unique();
    tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
