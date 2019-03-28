
exports.up = function(knex, Promise) {
    return knex.schema.createTable('association_recipes_ingredients', (table) => {
        table.increments('id');

        table
            .integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes');

        table
            .integer('ingredient_id')
            .notNullable()
            .references('id')
            .inTable('ingredients');

        table
            .string('quantity', 128)
            .notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('association_recipes_ingredients');
  };
