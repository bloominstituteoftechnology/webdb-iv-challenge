
exports.up = function(knex, Promise) {
    return knex.schema.createTable("instructions", instructions=>{
        instructions.increments();
        instructions.string('name',255).notNullable();
        instructions
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .notNullable();
    })
};
  
   exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('intructions')
};