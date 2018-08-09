exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', (recipe) => {
    recipe.increments();

    recipe
      .string('name')
      .notNullable()
      .unique();

    recipe
      .integer('dish_id')
      .unsigned() // permits only positive numbers
      .notNullable()
      .references('id')
      .inTable('dishes')
      .onUpdate('CASCADE') // makes it so if a parent element is deleted then the children element will also be deleted
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {};
