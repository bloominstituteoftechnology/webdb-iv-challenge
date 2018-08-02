exports.up = function(knex, Promise) {
  return knex.schema.createTable('quantity', function(t) {
    t.increments(); // PK defaults to 'id'
    t.string('amount', 100)
      .unique()
      .notNullable();
    t.integer('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quantity');
};
