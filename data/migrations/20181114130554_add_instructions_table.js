exports.up = function(knex, Promise) {
	return knex.schema.createTable('instructions', function(table) {
		table.increments()
		table.string('step', 256).notNullable()
		table.integer('recipe_id').notNullable().unsigned().references('id').inTable('recipes')
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('instructions')
}
