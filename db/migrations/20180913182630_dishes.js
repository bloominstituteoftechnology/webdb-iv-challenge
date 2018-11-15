
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(t){
    t.increments();
    //das right new key who dish?
    t
    .string('name', 128)
    .notNullable()
    .unique('who_dish')
  })
};

exports.down = function(knex, Promise) {

};
