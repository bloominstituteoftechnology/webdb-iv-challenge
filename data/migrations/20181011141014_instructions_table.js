exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', (tbl) => {
        tbl.increments();
        tbl.integer('recipe').unsigned().references('id').inTable('recipes');
        tbl.string('step').notNullable();
        tbl.integer('stepNum').unsigned().notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions');
};
