exports.up = (knex, Promise) => {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl
      .integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes');
    tbl
      .string('name', 255)
      .notNullable()
      .unique();
  });
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('recipes');
