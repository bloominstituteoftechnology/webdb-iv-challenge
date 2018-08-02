
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments(); 
    
        tbl
          .string('name', 256)
          .notNullable()
          .unique()
          .defaultTo('Not Provided');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
