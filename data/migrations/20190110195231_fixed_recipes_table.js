
exports.up = function(knex, Promise) {
  return knex.schema.hasTable('recipes').then(exists=>{
      if(exists){
          return knex.schema.table('recipes', table=>{
              table.dropUnique('dishes_id');
          })
      }
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('recipes', table=>{
      table.dropUnique('dishes_id');
  })
};
