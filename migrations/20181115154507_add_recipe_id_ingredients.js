exports.up = function(knex, Promise) {
    return knex.schema.table('ingredients', tbl => {
        tbl.integer('recipeId').references('id').inTable('recipes')
    })
};
  
exports.down = function(knex, Promise) {
    return knex.schema.table('ingredients' , function(tbl){
        tbl.dropColumn('recipeId');
    });
};
