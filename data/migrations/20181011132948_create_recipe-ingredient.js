
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe-ingredient', function(tbl){
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe');
        tbl.integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredient');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe-ingredient');
};
