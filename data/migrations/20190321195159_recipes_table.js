
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.integer('dish_id').references('id').inTable('dishes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
