
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', tbl =>{
        tbl.increments('id');
        tbl.string('action', 128).unique().notNullable()
        tbl.integer('ingredient_id').unsigned().references('id').inTable('ingredient').notNullable()
        tbl.float('measurement').notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('steps')
    
  };
  