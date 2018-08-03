
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quantity', function(tbl) {
    tbl.increments();

    tbl
    .string('quantity')
    .notNullable()
    .unique();

    tbl
    .integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    tbl
    .integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredients')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('quantity');  
};
