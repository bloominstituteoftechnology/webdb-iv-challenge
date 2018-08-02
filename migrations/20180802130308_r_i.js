exports.up = function(knex, Promise) {
  return knex.schema.createTable('r_i', function(t) {
    t.increments(); // PK
    t.integer('r_id') // FK to recipes
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    t.integer('i_id') // FK to ingredients
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    t.integer('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('r_i');
};
