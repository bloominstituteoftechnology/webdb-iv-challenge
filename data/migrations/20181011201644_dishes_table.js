// dishes table 
// ID (primary KEY)
// name
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(table) {
        table.increments();
        table.string('dish', 50).notNullable();
        table.unique('dish');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};
