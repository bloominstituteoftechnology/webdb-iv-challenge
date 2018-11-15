exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipe_ingredients', function(table) {
		table.increments()
 		table.integer('recipe_id').notNullable().unsigned().references('id').inTable('recipes')
 		table.integer('ingredient_id').notNullable().unsigned().references('id').inTable('ingredients')
 		table.float('quantity').notNullable()
	})
}
 exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipe_ingredients')
}