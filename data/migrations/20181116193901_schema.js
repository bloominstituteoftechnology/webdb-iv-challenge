exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('dishes', (dishes) => {
            dishes.increments('id').primary();
            dishes.text('name').unique().notNullable();
        })
        .createTable('recipes', (recipes) => {
            recipes.increments('id').primary();
            recipes.text('name').notNullable();
            recipes.integer('dishId').references('dishes.id');
        })
        .createTable('ingredients', (ingredients) => {
            ingredients.increments('id').primary();
            ingredients.text('name').notNullable();
        })
        .createTable('recipeIngredientsMap', (rIMap) => {
            rIMap.integer('recipeId').references('recipes.id');
            rIMap.integer('ingredientId').references('ingredients.id');
            rIMap.integer('quantity').notNullable();
        })
        .createTable('instructions', (instructions) => {
            Promise.all([
                instructions.integer('step'),
                instructions.integer('recipeID').references('recipes.id')
            ]).then(() => {
                instructions.primary(['step, recipeID']);
            });
            instructions.text('stepDescription');
        });
};
exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('dishes'),
        knex.schema.dropTableIfExists('recipes'),
        knex.schema.dropTableIfExists('ingredients'),
        knex.schema.dropTableIfExists('recipeIngredientsMap'),
        knex.schema.dropTableIfExists('instructions'),
    ]);
};
