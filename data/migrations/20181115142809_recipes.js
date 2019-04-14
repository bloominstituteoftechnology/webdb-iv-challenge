
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl){
      tbl.increments();
      tbl.string('name', 200);
      tbl.string('steps');
      tbl.integer('dish_id').unsigned().references('id').inTable('dishes');
      tbl.string('ingredients').references('id').inTable('ingredients');
      tbl.integer('quantity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
