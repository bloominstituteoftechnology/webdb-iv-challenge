
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 255).unique();
        tbl.string('quantity', 255);
        tbl.string('measurement', 255);
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
