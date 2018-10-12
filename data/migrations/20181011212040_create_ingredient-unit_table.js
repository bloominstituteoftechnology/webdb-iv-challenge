
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient-unit', function(tbl){
        tbl.increments();
        tbl.integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredient');
        tbl.integer('unit_id')
            .unsigned()
            .references('id')
            .inTable('unit');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredient-unit');
};
