const express = require("express");
const db = require("./data/models/dataModel.js");
const server = express();
const port = 9000;

//apply middleware
server.use(express.json());

server.get('/', (req, res) => {
	res.send('<h2>Server is running.</h2>');
})


//--------- DISH ROUTES -------
server.get("/api/dishes", (req, res) => {
    db.getDishes()
      .then(dishes => res.status(200).json(dishes))
      .catch(err => res.send(err));
  });
  
  server.post("/api/dishes", (req, res) => {
    const dish = req.body;
    console.log(dish);
    db.addDish(dish)
      .then(id => res.status(200).json(id))
      .catch(err => res.status(200).json(err));
  });
  
  server.get("/api/dishes/:id", (req, res) => {
    id = req.params.id;
    if (!id) {
      res.status(400).json({ error: "Bad request" });
    }
    db.getDish(id)
      .then(dish => {
        if (!dish) {
          res
            .status(500)
            .json({ error: "There was an error retrieving the dish" });
        } else res.status(200).json(dish);
      })
      .catch(err => res.send(err));
  });
  
  //---------- RECIPE ROUTES ------------
  server.get("/api/recipes", (req, res) => {
    db.getRecipes()
      .then(recipes => res.status(200).json(recipes))
      .catch(err => res.send(err));
  });
  
  server.post("/api/recipes", (req, res) => {
    const recipe = req.body;
    console.log("recipe : ", recipe);
    db.addRecipe(recipe)
      .then(id => res.status(200).json(id))
      .catch(err => res.status(200).json(err));
  });


server.listen(port, function() {
    console.log(`\n API RUNNING ON ${port} \n`);
})