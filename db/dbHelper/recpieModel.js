"use strict";

const db = require("../dbConfig.js");

module.exports = {
  async getDishes() {
    return await db.select().table(`dishes`);
  },

  async addDish(dish) {
    return await db(`dishes`).insert({
      name: dish.name
    });
  },

  async getDish(id) {
    return await db(`dishes`)
      .where({
        id: id
      })
      .select();
  },

  async getRecipes() {
      return await db(`recipie`).select()
  },

  async addRecipe(recipie){
    return await db(`recipie`).insert({
        name: recipie.name
    })
  }
};
