// Test dbHelper here

const dbHelper = require('./database/db_helpers');

// const test = dbHelper.getDishes().then(res => {console.log(res)});
// const test2 = dbHelper.getDish(1).then(res => {console.log(res)});
const test3 = dbHelper.getRecipes().then(res => {console.log(res)});

