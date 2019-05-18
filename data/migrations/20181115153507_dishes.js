exports.up = function(knex, Promise) {
	return knex.schema.createTable('dishes', (tbl) => {
		tbl.increments();
		tbl.string('name', 255);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dishes');
};
