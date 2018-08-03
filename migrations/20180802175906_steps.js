
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', function(tbl) {
      tbl.increments();
  
      tbl
      .integer('steps')
      .notNullable()
      .unique();
  
      tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  
      tbl
      .integer('instruction_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('instructions')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    });
  };

exports.down = function(knex, Promise) {
  
};
