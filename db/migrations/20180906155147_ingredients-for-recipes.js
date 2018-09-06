exports.up = (knex, Promise) => {
  return knex.schema.createTable('ingredients-for-recipes', t => {
    t.increments();
    t.float('quantity').defaultTo(1);
    t.integer('recipe_id').references('recipes.id').onDelete('cascade');
    t.integer('ingredient_id').references('ingredients.id').onDelete('cascade');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('ingredients-for-recipes');
};
