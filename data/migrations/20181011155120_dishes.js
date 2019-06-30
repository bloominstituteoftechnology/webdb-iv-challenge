exports.up = knex => {
  knex.schema.createTable('dishes', table => {
    table.increments();
    table
      .string('name', 128)
      .notNullable()
      .unique('dish_name');
  });
};

exports.down = knex => knex.schema.dropTable('dishes');
