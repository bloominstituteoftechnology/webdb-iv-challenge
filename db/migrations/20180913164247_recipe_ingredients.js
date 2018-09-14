
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', function(tbl) {
        tbl.increments();
        tbl
              .integer('recipe_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('recipes')
              tbl
              .integer('ingredient_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('ingredients')
              tbl
              .float('quantity')
              .notNullable()
              tbl
        .integer('unit_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('units')
            })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('recipe_ingredients')
};


