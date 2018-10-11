const getDishes = () => {
    return db('dishes');
}
 const addDish = dish => {
    return db.insert(dish).into('dishes');
}
 const getDish = id => {
    return db('dishes').where({id});
}
 const getRecipes = () => {
    return db('recipes');
}
 const addRecipe = recipe => {
    return db.insert(recipe).into('recipes')
} 