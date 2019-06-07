const db = require('./dbConfig');

module.exports = {
  find,
  add,
  findRecipie
};

function find(dbn, id=0) {
  if(!dbn) throw "database name cant be empty";
  if(id && id > 0)
  {
   db(dbn)
    .where({ id })
    .first();
  }
  return db(dbn);
}

async function findRecipie(itemnumber)
{
    let ingredients = await db.select("ingredients.name", "ingredient_map.quantity")
    .from("ingredient_map")
    .where("recipie_id", itemnumber)
    .join("ingredients", "ingredient_map.ingredient_id", "ingredients.id" );
    
    let recipie = await db.select("*")
    .from("recipies").where("id", itemnumber).first();

    recipie.ingredients = await ingredients;
    return recipie;
}
async function add(dbn, item)
{
    if(!id && id < 1) throw("invalid id")
    let [newid] = await db(dbn)
    .insert(item);

    return newid;
}
