
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    
    tbl.string('recipe_name')
      .notNullable()
      .unique();

    tbl.integer('dish_id')
      .unsigned()
      .references('id')
      .inTable('dishes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl.integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl.integer('quantity')
      .unsigned()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
