
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .unique();

      tbl
        .integer('recipies_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipies')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('recipies', tbl => {
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .unique();

      tbl
        .integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .string('recipie', 420)
        .notNullable()
        .unique();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('dishes')
    .dropTableIfExists('recipies')
    .dropTableIfExists('ingredients')
};
