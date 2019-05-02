exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
      //pk
      tbl.increments();

      tbl.string('name', 128).notNullable();
      tbl.string('instructions').notNullable();

      //fk
      tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
