"use strict";

const recipieDb = require("./db/dbHelper/recpieModel");

// Get Dishes
recipieDb.getDishes().then(data => {
  console.log(`Get Dishes`);
  console.log(data);
});

recipieDb.addDish({ name: "Lasange" }).then(added => {
  console.log(`Added dish id: ${added}`);
});

recipieDb.getDish(1).then(data => {
  console.log(`Dish 1`);
  console.log(data);
});

recipieDb.getRecipes().then(data => {
  console.log(`Get Recpies`);
  console.log(data);
});

recipieDb.addRecipe({ name: "Classic Italian lasagne" }).then(added => {
  console.log(`Added recpie id: ${added}`);
});
