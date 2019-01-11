
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', function(tbl){

    //Create composite primary key
    tbl.primary(['stepID', 'recipe_id']);
    tbl.integer('stepID').notNullable();
    tbl.integer('recipe_id')        //primary and foreign key
        .unsigned().references('id').inTable('recipes');

    tbl.integer('ingredient_id')
        .unsigned().references('id').inTable('ingredients');
    tbl.float('ingredient_qty').notNullable();
    tbl.string('ingredient_unit', 255).notNullable();


    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
  };
