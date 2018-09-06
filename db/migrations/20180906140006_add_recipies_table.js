
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments('id');
        tbl.string('name', 256)
           .notNullable()
           .unique();
        tbl.integer('dish_id')
        tbl.blob('ingredient_ids')
        tbl.blob('instructions_id')
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
  };
  