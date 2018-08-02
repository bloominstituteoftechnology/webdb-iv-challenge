// Build our database and dishes table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tbl){
    // Primary key, id of dishes
    tbl.increments()

    // name field
    tbl
        .string('name', 225)
        .unique()
        .notNullable()
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema
                .dropTableIfExists('dishes')
                .then(function(){
                    console.log('dropped dishes')
                })
};
