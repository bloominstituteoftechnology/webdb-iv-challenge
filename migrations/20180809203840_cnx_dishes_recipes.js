
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes_recipes', connection => {
        connection.increments();

        connection
            .integer('dishId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes');

        connection
            .integer('recipeId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe');
    })
};

exports.down = function(knex, Promise) {
  
};
