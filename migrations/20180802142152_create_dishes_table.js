
exports.up = function(knex, Promise) {
	return knex.schema.createTable('dishes', function(dishes) {
   dishes.increments();
   dishes
     .string('name')
     .notNullable()
     .unique();
   dishes.text('text').notNullable();

  });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('dishes');
};



