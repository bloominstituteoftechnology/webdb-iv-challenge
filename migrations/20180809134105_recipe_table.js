
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', recipe => {
    recipe.increments()

    recipe
      .string('name')
      .notNullable()
      .unique()

      recipe
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      })
};

exports.down = function(knex, Promise) {
  
};
