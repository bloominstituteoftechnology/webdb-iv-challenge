const db = require('../db');

module.exports = {
    getRecipes: () => {
        return db('recipes');
    }
}