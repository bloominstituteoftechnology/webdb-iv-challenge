
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {
        tbl
            .increments();
    
        tbl 
            .string('name', 128)
            .notNullable();

        tbl 
            .integer('recipe_id')
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes');
};
