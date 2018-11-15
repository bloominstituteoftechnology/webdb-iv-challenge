
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {

        tbl.increments();

        tbl
          .string('recipe', 255)
          .notNullable()
          .unique();

        tbl
          .integer('dishId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('dishes');
    })
  };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
