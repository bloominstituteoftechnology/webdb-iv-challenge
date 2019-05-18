
exports.up = function (knex, Promise) {
    return knex.schema.table('Recipes', tbl => {
        tbl.integer('Dish_id')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('Recipes', function (tbl) {
        tbl.dropColumn('Dish_id');
    })
};
