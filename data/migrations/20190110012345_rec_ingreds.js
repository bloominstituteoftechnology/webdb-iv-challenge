
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rec_ingreds', table => {
    table.increments();
    table.integer('rec_id').unsigned().notNullable();
    table.foreign('rec_id').references('id').on('recipes');
    table.float('amt');
    table.string('msmnt');
    table.integer('ingred_id').unsigned().notNullable();
    table.foreign('ingred_id').references('id').on('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
