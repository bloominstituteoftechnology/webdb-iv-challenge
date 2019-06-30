should return a list of all dishes in the database.
<!-- --------------------------- -->
select * from dishes

addDish(dish): should add the dish to the database and return the id of the new dish.
<!-- --------------------------- -->
insert into dishes (dish_name)
values("hambergers")

should return the dish with the provided id and include a list of the related recipes
<!-- --------------------------- -->
SELECT dishes.dish_name, recipes.recipe_name
FROM dishes
INNER JOIN recipes
ON dishes.id=recipes.dish_id
where recipes.dish_id = 1

 should return a list of all recipes in the database including the dish they belong to
 <!-- --------------------------- -->
SELECT dishes.dish_name, recipes.recipe_name
FROM dishes
INNER JOIN recipes
ON dishes.id=recipes.dish_id

add a method called getRecipe(id) to your data access library that should return the recipe with the provided id. The recipe should include:
name of the dish.
name of the recipe.
the list of ingredients with the quantity.
the list of steps in the order they need to be executed.
 <!-- --------------------------- -->

<!-- name of view recipe_info -->
select dishes.dish_name, recipes.id as recipe_id, recipes.recipe_name, recipes.directions, recipe_ingredients.amount, ingredients.ingredient_name
from dishes
inner join recipes on recipes.dish_id=dishes.id
inner join recipe_ingredients on recipe_ingredients.recipes_id=recipes.id
inner join ingredients on recipe_ingredients.ingredient_id=ingredients.id

select * from recipe_info where receipe_id = 1 


addRecipe(recipe): should add a recipe to the database and return the id of the new recipe.
<!-- --------------------------- -->
insert into recipes (recipe_name, directions, dish_id)
values("western-cheese-burger", "deep fry for 10 mins and cheese, meat, and bbq sauce", 3)












 
