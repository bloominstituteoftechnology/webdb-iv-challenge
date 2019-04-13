
exports.up = function(knex, Promise) {
    return knex.schema.table('joinTable', function (table) {
        table.float('quantity');
        table.string('label');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('joinTable'), function(thistable){
        thistable.dropColumn('quantity');
        thistable.dropColumn('label')
    }
};