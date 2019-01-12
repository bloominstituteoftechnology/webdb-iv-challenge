
exports.up = function(knex, Promise) {
   return knex.schema.createTable('dishes', function (table) {
    table.increments();
    table.string('name').notNullable().unique();
    });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('dishes');
};
