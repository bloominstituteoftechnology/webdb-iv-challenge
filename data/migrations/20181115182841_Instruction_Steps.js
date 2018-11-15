exports.up = function (knex, Promise) {
    return knex.schema.createTable('Instructions', function (tbl) {
        tbl.increments()

        tbl.string('step', 250)
            .notNullable()

        tbl.integer('recipe_id')
            .notNullable()
            .unsigned()
            .references('id').inTable('Recipes')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Instructions')
}
