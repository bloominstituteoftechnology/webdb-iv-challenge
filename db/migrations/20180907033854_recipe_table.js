
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function (table) {
    // recipe id
    table.increments()
    // recipe name
    table.string('name', 255)
         .notNullable()
         .unique('recipe_name')
    // dish id 
    table.integer('dish_id')
    table.foreign('dish_id').references('dish.id')
    // instruction id
    table.integer('instruction_id')
    table.foreign('instruction_id').references('instruction.id')
    // ingredient id
    table.integer('ingredient_id')
    table.foreign('ingredient_id').references('ingredient.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe')
};
