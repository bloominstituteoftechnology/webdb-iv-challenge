
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', tbl => {
      tbl.increments()
      tbl.string('recipe_name').notNullable().unique()
      tbl.integer('dish_id')
          .unsigned()
          .references('id')
          .inTable('dish')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe')
};
