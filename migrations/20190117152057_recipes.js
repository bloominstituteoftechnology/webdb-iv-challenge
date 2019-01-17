
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function (tbl) {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.integer('dish_id').notNullable().unsigned();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
};
