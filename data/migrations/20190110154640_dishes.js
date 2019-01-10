
exports.up = function (knex, Promise) {
    return knex.schema.createTable('dishes', dishes => {
        dishes.increments();
        dishes.string('dish_name').notNullable().unique();
    })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
};
