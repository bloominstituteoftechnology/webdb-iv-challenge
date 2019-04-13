exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {

        tbl.increment();

        tbl.string('name', 255);
        tbl.float('quantity');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("ingredients");
};
