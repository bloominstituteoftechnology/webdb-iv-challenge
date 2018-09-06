exports.up = (knex, Promise) => {
  return knex.schema.createTable('steps', t => {
    t.increments();
    t.string('step').notNullable();
    t.integer('order');
    t.integer('recipe_id').references('recipes.id').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('steps');
};
