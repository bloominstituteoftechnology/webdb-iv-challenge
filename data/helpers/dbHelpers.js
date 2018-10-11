const getDishes = () => db('dishes');

const addDish = dish => db.insert(dish).into('dishes');

const getDish = id => db('dishes').where({ id });

const getRecipes = () => db('recipes');

const addRecipe = recipe => db.insert(recipe).into('recipes');
