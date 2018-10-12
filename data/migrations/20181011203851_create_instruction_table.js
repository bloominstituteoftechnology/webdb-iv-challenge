exports.up = function(knex, Promise) {
    return knex.schema.createTable('instruction', function(tbl){
        tbl.increments('step');
        tbl.string('description',255).notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipe');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instruction');
};
