
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_ingredients', tbl => {
        tbl.increments();
  
        tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes_ingredients');
};
