
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(t){
      t.increments();
      t.string('name', 128).notNullable().unique('recipe_name');

      t.integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dishes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
