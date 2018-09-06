
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {
        tbl
            .increments();
    
        tbl 
            .string('name', 128)
            .notNullable();

        tbl 
            .integer('recipe_1')

        tbl 
            .integer('recipe_2')

        tbl 
            .integer('recipe_3')

        tbl 
            .integer('recipe_4')

      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes');
};
