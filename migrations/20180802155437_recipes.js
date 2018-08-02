
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
  
        tbl
        .string('name', 100)
        .notNullable()
        .unique()
        .defaultTo('Not Provided')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
