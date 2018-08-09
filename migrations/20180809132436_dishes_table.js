exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', (dish) => {
    dish.increment(); //gives it an id and autoincremnets

    dish
      .string('name')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {};

// knex migrate:make dishes_table
