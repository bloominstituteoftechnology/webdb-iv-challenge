
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
      table.increments();
      table.string('name', 255);
      table.float('weight/volume');
      table.integer('recipe_id').unsigned().references('id').inTable('recipes');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
