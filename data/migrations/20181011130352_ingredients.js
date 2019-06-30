
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl) {
	tbl.increments();
	tbl.string('name', 255).notNullable();
	tbl.integer('recipe_id').unsigned().references('id').inTable('recipe');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
