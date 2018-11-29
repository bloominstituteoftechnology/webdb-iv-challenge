
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', function (tbl) {
        tbl.increments();
        tbl.string('name', 255)
        .notNullable()
        tbl.integer('recipe_id').references('id').inTable('recipe')
        tbl.integer('ingredient_id').references('id').inTable('ingredients')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
  };
  