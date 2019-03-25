
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', function(table) {
    	table.increments();
    	table
    		.integer('step_number')
    		.notNullable()
		table
			.string('description')
			.notNullable()
	  	table
	  		.integer('recipe_id')
	  		.unsigned()
	  		.notNullable()
	  		.references('id')
	  		.inTable('recipes')
	    })
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('steps')
};
