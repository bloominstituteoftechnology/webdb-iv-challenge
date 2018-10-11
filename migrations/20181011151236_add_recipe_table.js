
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(recipes){
      recipes.increments();
      recipes.integer('dish_id').notNullable().references('id').inTable('dishes');
      recipes.string('name', 50).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
