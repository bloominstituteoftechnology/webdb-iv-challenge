# Recipe Book

## Topics

- database modeling.
- migration scripts.
- seeding.
- knex.

## Assignment

Design the **data model** for a _recipe book_ application, then use `Knex migrations and seeding` functionality to build a `SQLite3` database based on the model and seed it with test data.

The requirements for the system, as stated by the client are:

✅ have a way to manage dishes. A **dish** is something the client wants to cook, like _pizza_ or _tacos_.
✅ have a way to manage recipes. A **dish** can have different recipes for tacos, like _tex-mex_ or _granny's_. A **recipe** belongs only to one **dish**.
✅ have a way to manage ingredients.
✅ a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.
✅ when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.
✅ have a way to save instructions for cooking a recipe.
✅ have a way to pick a **dish** and a **recipe** and get a _shopping list_ with all the ingredients, and quantity of each, needed to cook the **dish**.

In addition to the `migrations` and `seeding` scripts, write a data access file that **exports** an object with the following functions:

✅ `getDishes()`: should return a list of all dishes in the database.
✅ `addDish(dish)`: should add the **dish** to the database and return the `id` of the new **dish**.
✅ `getDish(id)`: should return the **dish** with the provided `id` and include a list of the related recipes.
✅ `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
✅ `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.

Organize and name your files anyway you see fit.

## Stretch Problems

- design and build a RESTful API that makes use of your data access file and publishes endpoints that a client application can use to manage all resources.
- add a method called `getRecipe(id)` to your data access library that should return the recipe with the provided `id`. The recipe should include:
  - name of the dish.
  - name of the recipe.
  - the list of ingredients with the quantity.
- follow the same pattern to add the CRUD operations for other entities in the system.
- add _units of measure_ support for the **ingredient**s.
- design and build a front end client for your API.
- add a `getShoppingList(recipeId)` that returns a list of all the recipe's ingredients including the quantity of each.

## Database Schema

*Below are the client's requests, my schema design and notes on the relationships, one to one, one to many or many to many, between tables and required column values - Tim*

![WEB DB IV Challenge Schema](https://i.ibb.co/2YCRrWs/Screen-Shot-2019-05-02-at-4-04-44-PM.png "WEB DB IV Challenge Schema")

*Client Request 1: have a way to manage dishes. A **dish** is something the client wants to cook, like _pizza_ or _tacos_.*

- *Create a dishes table that contains*
  - An auto incrementing integer as the primary key
  - A not null string for the name of the dish

*Client Request 2: have a way to manage recipes. A **dish** can have different recipes for tacos, like _tex-mex_ or _granny's_. A **recipe** belongs only to one **dish**.*

- *Relationships*
  - A recipe has one dish
  - A dish has many recipes
- *Create a recipes table that contains*
  - An auto incrementing primary key called id
  - A not null string for the name of the dish
  - A foreign key of dish_id

*Client Request 3: have a way to manage ingredients.*

- *Create an ingredients table that contains*
  - An auto incrementing primary key called id
  - A not null string for the name of the ingredient

*Client Request 4: a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.*

- *Relationships*
  - Recipes have a one to many relationship to ingredients
  - Ingredients have a one to many relationship to recipes
  - Recipes and ingredients have a many to many relationship with each other
- *Create a third table called recipeIngredients that contains*
  - An auto incrementing primary key called id
  - A foreign key of recipe_id
  - A foreign key of ingredient_id

*Client Request 5: when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.*

- *Add a field called ingredients to recipeIngredients that is a float*

*Client Request 6: have a way to save instructions for cooking a recipe.*

- *Add a field called instructions to recipes that is a string*

*Client Request 7: have a way to pick a **dish** and a **recipe** and get a _shopping list_ with all the ingredients, and quantity of each, needed to cook the **dish**.*
1. Create a GET request to the dishes tables and recipes tables
2. Filter the recipeIngredients using the recipe_id
   - Return an array of objects containing the quantity and ingredients_id
3. Filter the ingredients table using the ingredient_id
   - Return an array of objects containing the ingredient_name 
4. Return an array of objects containing the ingredient_name and quantity