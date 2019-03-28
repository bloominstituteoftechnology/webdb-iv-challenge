exports.up = (knex, Promise) => {
  return knex.schema.createTable('recipes', t => {
    t.increments();
    t.string('name').unique().notNullable();
    t.integer('dish_id').references('dishes.id').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('recipes');
};
