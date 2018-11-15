exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', table => {
        table.increments()
        table.string('ingredient_name', 128)
        table.integer('recipe_id').unsigned().references('id').inTable('recipes')
        // not very relevant 
        // table.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
}