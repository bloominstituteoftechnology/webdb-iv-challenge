
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl => {
        tbl.increments('dishes_id');
        tbl.string('dish name')
            .notNullable()
            .unique('dish_name');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes')
};
