
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', function(tbl) {
    	tbl.increments();
    	tbl
    		.integer('step_number')
    		.notNullable()
		tbl
			.string('description')
			.notNullable()
	  	tbl
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