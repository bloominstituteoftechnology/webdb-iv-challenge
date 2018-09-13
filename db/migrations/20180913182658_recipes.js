
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(t){
    t.increments();
    t
    .string('name', 142)
    .notNullable()
    .unique('recipe_name')
    //foreign key for dishes will setup later.
    t
    .integer('dish_id')
    .notNullable()
    .references("id")
    .inTable('dishes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes')
};
