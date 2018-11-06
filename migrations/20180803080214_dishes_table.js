
exports.up = function(knex, Promise) {
  //add dishes_table
  return knex.schema.createTable('dishes', function(tbl) {
    //pk
    tbl.increments();
    tbl.string('dish_name', 255)
    .unique()
    .notNullable();
    //.defaultTo('whatever you want to default')

  })
};

exports.down = function(knex, Promise) {
  //remove_dishes_table
  return knex.schema.dropTableIfExists('dishes');
};
