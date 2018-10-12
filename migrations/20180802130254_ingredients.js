exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(t) {
    t.increments(); // PK
    t.string('name', 100)
      .unique()
      .notNullable();
    t.integer('q_id') // FK to quantity
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('quantiy')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    t.integer('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
