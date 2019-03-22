
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_instructions', tbl => {
      tbl.increments();
      tbl.string('instructions').notNullable();
      tbl.integer('recipe_id').notNullable().references('id').inTable('recipes');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_instructions');
};
