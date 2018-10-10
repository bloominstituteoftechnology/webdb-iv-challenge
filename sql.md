should return a list of all dishes in the database.
<!-- --------------------------- -->
select * from dishes

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












 
