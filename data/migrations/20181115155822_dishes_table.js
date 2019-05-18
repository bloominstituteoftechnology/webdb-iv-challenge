exports.up = function(knex, Promise) {
  //create table
  return knex.schema.createTable("dishes", tbl => {
    //set primary id key
    tbl.increments();

    //other fields
    tbl.string("name", 50).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
