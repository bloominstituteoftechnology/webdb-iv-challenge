
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', function(tbl) {
        tbl.increments('id');
        tbl.string('Recipe', 128);
        tbl.integer('dishID').unsigned();
        tbl.foreign('dishID').references('id').inTable('dishes');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe');
};
