exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', tbl => {
    tbl.increments();
    tbl.integer('recipe_id').unsigned();
    tbl.foregin('recipe_id').references('recipe.id');
    tbl.integer('step_number').notNullable();
    tbl.string('step_description').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
