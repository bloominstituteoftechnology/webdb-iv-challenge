
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl => {
        tbl.increments('id');
        tbl
          .string('name', 255)
          .notNullable()
          .unique();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};
