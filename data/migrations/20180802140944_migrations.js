
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('dishes', table => {
            table.increments();
            table.text('name').notNullable();
        })
        .createTable('recipes', table => {
            table.increments();
            table.text('name').notNullable();
            table.integer('dish_id').notNullable().unsigned().references('id').inTable('dishes').onUpdate('CASCADE').onDelete('CASCADE');;
        })
        .createTable('ingredients', table => {
            table.increments();
            table.text('name').notNullable();
            table.text('quantity').notNullable();
            table.integer('recipe_id').notNullable().unsigned().references('id').inTable('recipes').onUpdate('CASCADE').onDelete('CASCADE');;
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients').dropTableIfExists('recipes').dropTableIfExists('dishes');
};
