

exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(table) {
        table.increments();
        table.string('name', 255).notNullable();
        table
            .integer('dish_id')
            .notNullable()
            .references('id')
            .inTable('dishes');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};