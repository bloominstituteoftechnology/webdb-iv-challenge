
exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", function(food){
      food.increments(); 
      food  
        .string("name", 128)
        .notNullable()
        .unique("name"); 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes"); 
};
