
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient', function(tbl){
        tbl.increments();
        tbl.string('name',255).notNullable();
        tbl.float('amount');
            // .unsigned();
        // tbl.string('unit',255);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredient');
};
