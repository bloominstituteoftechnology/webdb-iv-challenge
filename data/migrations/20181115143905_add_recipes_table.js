exports.up = function(knex, Promise) {
  // makes the changes to the database
  return knex.schema.createTable('recipes', function(tbl) {
    // make changes to the table using the tbl object passed as a parameter

    // primary key
    tbl.increments('id'); // generate an id field and make it auto-increment and the primary key

    //foreign key
    tbl.foreign('id').references('dishes.id');

    // other fields
    tbl.string('name', 255).notNullable();
    tbl.string('ingredients', 255).notNullable();

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  // undo the changes to the database (it's called rolling back changes)
  return knex.schema.dropTableIfExists('recipes');
};
