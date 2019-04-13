
exports.up = function(knex, Promise) {
    return knex.schema.createTable('joinTable', function(tbl){
        tbl
        .integer('recipes_id')
        .unsigned()
        .references('id')
        .inTable('recipes');
        tbl
        .integer('ingredients_id')
        .unsigned()
        .references('id')
        .inTable('ingredients');
});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('joinTable')
};
