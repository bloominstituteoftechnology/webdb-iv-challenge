
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', (recipes)=>{
      recipes.increments();
      recipes.string('name', 255).notNullable();
      recipes
        .integer('dish_id')
        .unsigned()
        .references('id')
        .inTable("dishes")
        .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
