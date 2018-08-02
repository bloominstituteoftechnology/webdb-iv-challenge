exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();

        tbl
        .string('name', 50)
        .unique()
        .notNullable()
        .defaultTo('Not Provided')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
