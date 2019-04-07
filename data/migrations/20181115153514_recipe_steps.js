
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', tbl => {
    Promise.all([
        tbl
            .integer('stepNumber'),
        tbl
            .integer('recipeId')
            .references('id')
            .inTable('recipe')
    ]).then(() => {
        tbl
            .primary(['stepNumber', 'recipeId'])
    })
    tbl
    .string('instructions')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps')
};
