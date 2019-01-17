exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', table => {
        table.increments();
        table.string('steps').notNullable();
        table.integer('ingredient_id').unsigned();
        table.foreign('ingredient_id').references('id').inTable('dish'); 
        table.integer('recipe_id').unsigned();
        table.foreign('recipe_id').references('id').inTable('recipe');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps')
};