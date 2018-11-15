
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', function(tbl){
        tbl.increments();
        tbl.string('description').notNullable()
        tbl.integer('order').unsigned()
        tbl.integer('recipe_id').unsigned().references('recipes.id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps')
};
