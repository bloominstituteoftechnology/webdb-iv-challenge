
exports.up = function(knex, Promise) {
	return knex.schema.createTable('units', function(table) {
	  	table.increments();
	  	table
	  		.string('name', 128)
	  		.notNullable()
	  		.unique('unit_name')
  		table
  			.float('multiplier')
  			.notNullable()
	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('units')
};
