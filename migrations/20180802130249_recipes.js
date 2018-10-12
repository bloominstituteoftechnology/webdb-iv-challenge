exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(t) {
    t.increments(); // PK
    t.string('name', 100)
      .unique()
      .notNullable();
    t.string('instructions').notNullable();
    t.integer('d_id') // FK to dishes
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dishes')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    t.integer('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
