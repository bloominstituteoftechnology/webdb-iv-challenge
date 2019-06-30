
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping_list', function(t){
      t.increments();

      t.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');

      t.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients');

      t.float('quantity').notNullable();

      t.string('measurement_unit', 128);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shopping_list');
};
