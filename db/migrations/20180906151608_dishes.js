exports.up = (knex, Promise) => {
  return knex.schema.createTable('dishes', t => {
    t.increments();
    t.string('name').unique().notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('dishes');
};
