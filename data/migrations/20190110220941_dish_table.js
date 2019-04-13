
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', table=>{
      table.increments();
      table.string('dish').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dish');
};
