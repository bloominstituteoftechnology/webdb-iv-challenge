
exports.up = function(knex, Promise) {
	return knex.schema.createTable('dishes', function(dishes) {
   dishes.increments();
   dishes
    .string('name')
    .unsigned()
    .notNullable();
   dishes
     .integer('dishId')
     .unsigned()
     .notNullable()
     .references('id')
     .inTable('recipes');

   dishes.text('text').notNullable();
  });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('dishes');
};




