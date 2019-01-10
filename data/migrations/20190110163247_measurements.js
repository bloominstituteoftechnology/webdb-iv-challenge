
exports.up = function(knex, Promise) {
    return knex.schema.createTable('measurements', (measurements) => {
        measurements.increments();
        measurements.float("quantity").notNullable();
        measurements.string("units").notNullable();
        measurements.integer('recipe_id').unsigned();
        measurements.foreign('recipe_id').references('id').on('recipes')
        measurements.integer('ingredient_id').unsigned();
        measurements.foreign('ingredient_id').references('id').on('ingredients')
})
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('measurements')
};
