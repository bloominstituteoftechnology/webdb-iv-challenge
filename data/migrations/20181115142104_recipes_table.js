exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl.string('directions');
    tbl.string('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
