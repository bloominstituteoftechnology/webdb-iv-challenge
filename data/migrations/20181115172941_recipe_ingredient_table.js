
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', (tbl) => {
        tbl.increments(); // table id

        tbl.integer('recipe_id').unsigned().notNullable(); 
        tbl.foreign('recipe_id').references('id').inTable('recipes').onDelete('CASCADE');// foreign key - recipe id from 'recipes'

        tbl.float('ingredient_quantity').unsigned().notNullable(); // ingredient quantity as float
        tbl.string('ingredient_units'); // optional ingredient units

        tbl.integer('ingredient_id').unsigned().notNullable(); 
        tbl.foreign('ingredient_id').references('id').inTable('ingredients');// foreign key - ingredient id from 'ingredients'
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipe_ingredients');
};
