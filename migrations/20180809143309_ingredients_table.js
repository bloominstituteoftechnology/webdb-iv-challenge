exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', (ingredient) => {
    ingredient.increments();

    ingredient
      .string('name')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {};
