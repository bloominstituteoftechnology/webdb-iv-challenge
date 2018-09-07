const db = require('knex')(require('../knexfile').development);

module.exports = {
  getShoppingList: (recipeId) => {
    return db().select('i.name', 'ir.quantity')
      .from('ingredients as i')
      .join('ingredients-for-recipes as ir', { 'ir.recipe_id': recipeId })
      .groupBy('i.name', 'ir.quantity');
  },

  getDishes: () => {
    return db('dishes');
  },

  getDish: (id) => {
    return db('dishes').where({ id }).then(d => {
      const name = d[0].name;

      return db('dishes as d').where({ 'd.id': id })
        .join('recipes', { 'd.id': 'recipes.dish_id' })
        .reduce((dish, recipe) => {
          return Object.assign(dish, { recipes: [...dish.recipes, recipe] });
        }, { id, name, recipes: [] });
      });
  },

  addDish: (dish) => {
    return db('dishes').insert(dish);
  },

  deleteDish: (id) => {
    return db('dishes').where({ id }).del();
  },

  getRecipes: () => {
    return db('dishes as d')
      .select('r.id as id', 'r.name as recipe', 'd.name as dish')
      .join('recipes as r', { 'd.id': 'r.dish_id' });
  },

  getRecipe: (id) => {
    const recipe = db('recipes as r')
      .select('r.name as recipe', 'd.name as dish')
      .join('dishes as d', { 'd.id': 'dish_id' })
      .where({ 'r.id': id });

    const steps = db('steps as s')
      .select('step')
      .join('recipes as r', { 'r.id': 'recipe_id' })
      .where({ 'r.id': id })
      .orderBy('order');

    const ingredients = db('ingredients as i')
      .select('i.name as ingredient', 'quantity')
      .join('ingredients-for-recipes as ir', { 'ir.id': 'i.id' })
      .join('recipes as r', { 'r.id': 'ir.id' })
      .where({ 'r.id': id });
    
      return Promise.all([recipe, steps, ingredients])
        .then(([r, s, i]) => {
          return r.concat(s, i)
            .reduce((acc, obj, ind) => {
              if (ind > 0 && ind < 4) {
                return Object.assign(acc, { steps: [...acc.steps, obj] });
              } else if (ind === 4) {
                return Object.assign(acc, { ingredients: [...acc.ingredients, obj] });
              } else {
                return Object.assign(acc, obj);
              }
            }, { recipe: '', dish: '', ingredients: [], steps: [] });
        });
  },

  addRecipe: (recipe) => {
    return db('recipes').insert(recipe);
  },
};