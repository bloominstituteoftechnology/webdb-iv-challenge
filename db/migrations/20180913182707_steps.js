
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(t){
    t.increments();
    t
    .integer('StepNumber')
    .notNullable();
    t
    .string('instruction')
    .notNullable();
    //foreign key
    t
    .integer('recipe_id')
    .notNullable()
    .references('id')
    .inTable('recipes');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('steps')
};
