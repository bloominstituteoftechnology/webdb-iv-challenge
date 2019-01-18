
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tbl){
    tbl.increments('id');

    //other fields
    tbl.string('name', 128);
  
    //constraints

    tbl.unique('name', 'uq_ingredients_name');

    //timestamps
    tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
