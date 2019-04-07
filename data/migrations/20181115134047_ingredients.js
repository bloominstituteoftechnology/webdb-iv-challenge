
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('name')
        .notNullable()
      tbl
        .float('ammount')
        .notNullable(); 
      tbl
        .integer('recipeId')
        .references('id')
        .inTable('recipe') 
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
