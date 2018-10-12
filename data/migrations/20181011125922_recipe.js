
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', function(tbl){
	tbl.increments();
	tbl.string('name', 255).notNullable();
	tbl.integer('dish_id').unsigned().references('id').inTable('dish');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe');
};
