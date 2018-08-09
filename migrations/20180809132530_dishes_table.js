
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', dish => {
    dish.increments()

    dish
     .string('name')
     .notNullable()
     .unique()
  })
};

exports.down = function(knex, Promise) {
  
};
