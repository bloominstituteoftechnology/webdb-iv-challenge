
exports.up = function(knex, Promise) {
    // create the zoo table
    return knex.schema.createTable('dishes', function(table) {
        // primary key
        table.increments('dish_id');

        //other fields
        table.string('name', 256)
        .notNullable()
        .unique()
        .defaultTo('Not provided');
    });
};

exports.down = function(knex, Promise) {
    // drop the zoo table
    return knex.schema.dropTableIfExists('dishes');
};
