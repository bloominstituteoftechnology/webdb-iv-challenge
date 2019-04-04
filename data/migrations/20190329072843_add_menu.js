exports.up = function(knex, Promise) {
    return knex.schema
      .createTable("dishes", tbl => {
        tbl.increments();
        tbl.string("name", 128)
          .notNullable()
          .unique();
      })
      .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("name", 128)
          .notNullable()
          .unique();
        tbl.integer("dish_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("dishes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
      .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
      })
      .createTable("recipe_ingredients", tbl => {
        tbl.increments();
        tbl.integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl.integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("ingredients")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl.real("quantity")
          .unsigned()
          .notNullable();
      });
  };
  // remove tables w/ FK before table referenced removal
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists("cohort_students")
      .dropTableIfExists("students")
      .dropTableIfExists("cohorts")
      .dropTableIfExists("tracks");
  };