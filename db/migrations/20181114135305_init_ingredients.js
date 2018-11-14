exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('ingredients_list').notNullable();
    tbl
      .string('type')
      .notNullable()
      .defaultTo('American')
      .references('type')
      .inTable('dishes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
