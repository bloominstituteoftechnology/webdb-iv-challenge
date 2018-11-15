const dishesData = [{ "id": 1, "name": "Non Aspirin" }, { "id": 2, "name": "Simvastatin" }, { "id": 3, "name": "Bambusa Pulsatilla" }, { "id": 4, "name": "Renew Dimethicone Skin Protectant" }, { "id": 5, "name": "Microsporum canis" }, { "id": 6, "name": "Stalevo" }, { "id": 7, "name": "Allspice" }, { "id": 8, "name": "Nu Pore Acne" }, { "id": 9, "name": "NO-WEAK-NAILS" }, { "id": 10, "name": "levomefolate calcium and schizochytrium dha" }]

const recipesData = [{
  "id": 1,
  "name": "tolnaftate",
  "dish_id": 1,
  "ingredient_id": 1,
  "time_min": 97,
  "steps": "Operative non-volatile function"
}, {
  "id": 2,
  "name": "Aspirin",
  "dish_id": 2,
  "ingredient_id": 2,
  "time_min": 58,
  "steps": "Universal bi-directional algorithm"
}, {
  "id": 3,
  "name": "Lisinopril",
  "dish_id": 3,
  "ingredient_id": 3,
  "time_min": 88,
  "steps": "Switchable intangible software"
}, {
  "id": 4,
  "name": "paroxetine hydrochloride hemihydrate",
  "dish_id": 4,
  "ingredient_id": 4,
  "time_min": 20,
  "steps": "Networked tangible workforce"
}, {
  "id": 5,
  "name": "Treatment Set TS342922",
  "dish_id": 5,
  "ingredient_id": 5,
  "time_min": 38,
  "steps": "Enhanced mobile success"
}, {
  "id": 6,
  "name": "Fexofenadine Hydrochloride",
  "dish_id": 6,
  "ingredient_id": 6,
  "time_min": 29,
  "steps": "Vision-oriented coherent strategy"
}, {
  "id": 7,
  "name": "Amitriptyline Hydrochloride",
  "dish_id": 7,
  "ingredient_id": 7,
  "time_min": 30,
  "steps": "Operative fresh-thinking definition"
}, {
  "id": 8,
  "name": "Rivastigmine Tartrate",
  "dish_id": 8,
  "ingredient_id": 8,
  "time_min": 6,
  "steps": "Distributed global extranet"
}, {
  "id": 9,
  "name": "TRICLOSAN",
  "dish_id": 9,
  "ingredient_id": 9,
  "time_min": 90,
  "steps": "Synergistic demand-driven utilisation"
}, {
  "id": 10,
  "name": "Tetracaine Hydrochloride",
  "dish_id": 10,
  "ingredient_id": 10,
  "time_min": 27,
  "steps": "Virtual upward-trending standardization"
}]

const ingredientsData = [{ "id": 1, "name": "Mayonnaise - Individual Pkg" }, { "id": 2, "name": "Tart Shells - Sweet, 2" }, { "id": 3, "name": "Coffee - Decafenated" }, { "id": 4, "name": "Eggplant - Regular" }, { "id": 5, "name": "Bread - Bistro Sour" }, { "id": 6, "name": "Artichokes - Jerusalem" }, { "id": 7, "name": "Arizona - Plum Green Tea" }, { "id": 8, "name": "Lotus Root" }, { "id": 9, "name": "Lid Tray - 12in Dome" }, { "id": 10, "name": "Veal - Shank, Pieces" }]

exports.seed = function(knex, Promise) {
  return knex('ingredients').del().then(function(){ 
  return knex('ingredients').insert(ingredientsData).then(function() {
  return knex('dishes').del().then(function(){
  return knex('dishes').insert(dishesData).then(function(){
  return knex('recipes').del().then(function(){
  return knex('recipes').insert(recipesData)})
    
  })})})})
}
