exports.up = function(knex, Promise) {
	return knex.schema
		.createTable("dishes", tbl => {
			tbl.increments();

			tbl.string("name", 255);

			tbl.timestamps(true, true);

			tbl.unique("name", "uq_dishes_name");
		})
		.createTable("recipes", tbl => {
			tbl.increments();

			tbl.string("name", 255);

			tbl.timestamps(true, true);

			tbl.unique("name", "uq_recipes_name");

			tbl.integer("dish_id")
				.unsigned()
				.references("id")
				.inTable("dishes");
		})
		.createTable("ingredients", tbl => {
			tbl.increments();

			tbl.string("name", 255);

			tbl.timestamps(true, true);

			tbl.unique("name", "uq_ingredients_name");

			tbl.integer("recipe_id")
				.unsigned()
				.references("id")
				.inTable("recipes");
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists("dishes")
		.dropTableIfExists("recipes")
		.dropTableIfExists("ingredients");
};
