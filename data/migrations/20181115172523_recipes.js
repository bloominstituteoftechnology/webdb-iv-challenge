exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 256);
        tbl.integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dishes');
        tbl.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
};