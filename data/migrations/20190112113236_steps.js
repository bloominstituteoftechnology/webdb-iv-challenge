
exports.up = function(knex, Promise) {
   return knex.schema.createTable('steps', function (table) {
          table.increments();
          table.string('steps_procedure', 700).notNullable();
          table.integer('steps_number').notNullable();
          table.integer('recipe_id').notNullable();
          table.foreign('recipe_id').references('id').on('recipes');
        })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
