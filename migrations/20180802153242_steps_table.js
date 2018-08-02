
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', tbl => {
        tbl.increments()
    
        // FK
        tbl
            .integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
      
        // FK
        tbl
        .integer('instructions_id')
        .notNullable()
        .references('id')
        .inTable('instructions')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl
        .integer('step_number', 256)
        .notNullable();
    
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps')
};
