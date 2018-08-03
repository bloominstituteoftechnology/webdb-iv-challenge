/*
select d.dish_name, r.recipe_name, i.step_number, i.description, ig.ingredient_name, si.ingredient_quantity
from dishes d join recipes r on d.id = r.dish_id
			join instruction i on r.id = i.recipe_id
			join step_ingredient si on i.recipe_id = si.recipe_id and i.step_number = si.step_number
			join ingredients ig on si.ingredient_id = ig.id
where r.id = 1		
order by i.step_number
*/

const db = require('../db');

module.exports = {
    getRecipes: function () {
        return db('Recipes');
    },

    getRecipe: function (id) {
        const recipe = db('Recipes as r')
            .select('d.dish_name', 'r.recipe_name')
            .join('Dishes as d', 'd.id', 'r.dish_id')
            .where('r.id',id);
        const instruction = db('Recipes as r')
            .select('i.step_number', 'i.description', 'ig.ingredient_name', 'si.ingredient_quantity')
            .join('Instruction as i', 'r.id', 'i.recipe_id')
            .leftJoin('step_ingredient as si', function () {
                this.on('i.recipe_id', '=', 'si.recipe_id').andOn('i.step_number', '=', 'si.step_number')
            })
            .leftJoin('ingredients as ig', 'si.ingredient_id', 'ig.id')
            .where('r.id',id);
        const promises = [recipe, instruction];
        return Promise.all(promises);
    },

    addRecipe: function (recipe) {
        return db('Recipes').insert(recipe)
    },

    deleteRecipe: function (id) {
        return db('Recipes').where('id', id).del();
    },
}