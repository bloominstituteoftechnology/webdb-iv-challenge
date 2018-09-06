
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments()

    tbl
        .string('name', 256)
        .notNullable();
    
    // FK
    tbl
        .integer('dish_id')
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
