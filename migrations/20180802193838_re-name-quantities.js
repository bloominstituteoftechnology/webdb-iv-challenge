
exports.up = function(knex, Promise) {
    return knex.schema.renameTable('quantitys', 'quantities')
};

exports.down = function(knex, Promise) {
    return knex.schema.renameTable('quantities', 'quantitys')
};
