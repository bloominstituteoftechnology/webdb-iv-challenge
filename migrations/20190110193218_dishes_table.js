
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', (dishes)=>{
        dishes.increments();
        dishes.string('name', 255).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};
