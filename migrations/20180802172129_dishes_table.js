
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', tbl=>{
        tbl.increments(id);
        tbl.string('recipe_name').notNullable();
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dishes');
};
