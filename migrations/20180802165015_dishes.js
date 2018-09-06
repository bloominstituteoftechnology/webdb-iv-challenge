
exports.up = function(knex, Promise) {
    // create the dishes table
    return knex.schema.createTable('dishes', function(table) {
        // primary key
        table.increments();

        //other fields
        table.string('name', 256)
        .notNullable()
        .unique()
        .defaultTo('Not provided');
    });
};

exports.down = function(knex, Promise) {
    // drop the dishes table
    return knex.schema.dropTableIfExists('dishes');
};
