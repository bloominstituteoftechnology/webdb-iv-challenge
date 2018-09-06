exports.up = function(knex, Promise) {
  return knex.schema.createTable(`RecpiesToIngredient`, table => {
    table
      .integer(`recpie_id`)
      .unsigned()
      .notNullable()
      .references(`id`)
      .inTable(`recpie`);

    table
      .integer(`ingredient_id`)
      .unsigned()
      .notNullable()
      .references(`id`)
      .inTable(`ingredient`);

    table.float(`quantity`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`RecpiesToIngredient`);
};
