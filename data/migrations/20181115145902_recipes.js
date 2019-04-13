exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {

        // primary key
        tbl.increments();

        tbl.string('ingredients', 255);
        tbl.string('instructions', 255);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};

/*
- have a way to manage dishes. A `dish` is something the client wants to cook like _pizza_ or _tacos_.
- have a way to manage recipes. A `dish` can have different recipes for tacos, like _tex-mex_ or _granny's_. A `recipe` belongs only to one `dish`.
- have a way to manage ingredients.
- a `recipe` could have more than one ingredient and the same ingredient can be used in multiple recipes. Examples are "cup of corn flour" or "gram of butter".
- when saving the ingredients for a `recipe` capture the quantity required for that ingredient as a floating number.
- have a way to save instructions for cooking a recipe. Instructions will be a series of `steps` involved in cooking a `recipe`.
- for some recipes, the order in which the steps are performed matters, please provide a way to specify that order.
- have a way to pick a `dish` and a `recipe` and get a _shopping list_ with all the ingredients, and quantity of each, needed to cook the `dish`.
*/