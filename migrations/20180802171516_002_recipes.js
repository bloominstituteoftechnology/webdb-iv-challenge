
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
    
        tbl.string('name', 256)
        .notNullable()
        .unique()
        .defaultTo('Not Provided');

        tbl.integer('dishes_id')
        .unsigned
        .references('id')
        .inTable('dishes');

        tbl.integer('ingredients_id')
        .unsigned
        .references('id')
        .inTable('dishes');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
};
