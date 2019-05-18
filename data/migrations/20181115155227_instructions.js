

exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', tbl =>{
        tbl.increments('id');
        tbl.integer('recipie_id').unsigned().references('id').inTable('recipies').notNullable()
        tbl.integer('first_step').unsigned().references('id').inTable('steps').notNullable()
        tbl.integer('second_step').unsigned().references('id').inTable('steps').notNullable()
        tbl.integer('third_step').unsigned().references('id').inTable('steps').notNullable()
        tbl.integer('forth_step').unsigned().references('id').inTable('steps').notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('instructions')
    
  };
  