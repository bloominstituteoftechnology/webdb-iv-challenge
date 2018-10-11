exports.up = knex => {
  knex.schema.createTable('recipes', table => {
    table.increments();

    table
      .string('name', 128)
      .notNullable()
      .unique('recipe_name');

    table
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dishes');
  });
};

exports.down = knex => knex.schema.dropTable('recipes');
