exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', tbl => {
    tbl.increments();
    tbl.string('name', 280);
    tbl.integer('step');
    tbl
      .integer('recipes_id')
      .unsigned()
      .references('id')
      .inTable('recipes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('directions');
};
