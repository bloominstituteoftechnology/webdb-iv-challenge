exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', (dish) => {
    dish.increments(); //gives it an id and autoincremnets

    dish
      .string('name')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {};

//makes the table
// yarn knex migrate:make dishes_table

//creates the table in the database
// yarn knex migrate:latest
