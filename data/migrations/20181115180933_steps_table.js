
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', (tbl) => {
        tbl.increments(); // table id

        tbl.integer('recipe_id').unsigned().notNullable();
        tbl.foreign('recipe_id').references('id').inTable('recipes').onDelete('CASCADE'); // foreign key - recipe id from 'recipes'

        tbl.integer('order').unsigned().notNullable(); // ingredient quantity as float
        
        tbl.string('step_text').notNullable(); // optional ingredient units
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('steps');
};
