exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
      tbl.increments();

      tbl
      .string('name', 50)
      .unique()
      .notNullable()
      .defaultTo('Not Provided')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};
