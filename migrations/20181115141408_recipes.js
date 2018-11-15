exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes',function(tbl){
        tbl.increments();
        tbl.string('recipeName', 128).unique();
        tbl.string('dishName').references('dishName').inTable('dishes')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
};
