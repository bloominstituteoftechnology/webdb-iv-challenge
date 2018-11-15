
exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', function(tbl){
        tbl.increments()
        tbl.string('name',255).notNullable()
        tbl.integer('recipeId').notNullable().unsigned().references('id').inTable('recipes')
    })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions')
};