
exports.up = function(knex, Promise) {
    return knex.schema.createTable("ingredients",  function(food){
        food.increments();
    food
      .string("ingredient", 128)
      .notNullable()
      .unique("ingredient");
    food
      .integer("dish_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dishes");
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients")
};
