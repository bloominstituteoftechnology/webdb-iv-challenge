
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
    //primary key
    tbl.increments(); // creates an id field, int and autoincrement. you can name it what ever.

    // other fields
    tbl
        .string('text')
        .notNullable()
        .unique();
  });
};

exports.down = function(knex, Promise) {
  
};
