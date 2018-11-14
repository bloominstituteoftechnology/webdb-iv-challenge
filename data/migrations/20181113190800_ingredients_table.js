
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
        tbl.increments('id');

        tbl.float('quantity');

        tbl
        .string('name',150)
        .notNullable()

        tbl
        .integer('ing_id')
        .notNullable()
        .references('id')
        .inTable('recipes');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
  
};
