
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients_recipes', ingrec => {
      ingrec.increments();

      ingrec 
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      ingrec
      .integer('ingredients_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  
};
