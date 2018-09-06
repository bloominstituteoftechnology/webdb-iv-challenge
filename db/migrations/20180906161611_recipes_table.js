
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();

        tbl
          .string('name', 128)
          .notNullable()
          .unique('uq_recipe_name');
    
        // foreign key
        tbl
          .integer('dish_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('dishes');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes');
};
