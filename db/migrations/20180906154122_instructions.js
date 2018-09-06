exports.up = (knex, Promise) => {
  return knex.schema.createTable('instructions', t => {
    t.increments();
    t.integer('recipe_id').references('recipes.id').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('instructions');
};
