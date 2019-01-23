
exports.up = function(knex, Promise) {
 return knex.schema.createTable('dishes', table => {

 })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('dishes')
};
