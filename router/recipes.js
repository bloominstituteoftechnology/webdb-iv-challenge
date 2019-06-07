const router = require('express').Router();


const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/recipes.db3'
    }
}

const db = knex(knexConfig);

//check
// router.get('/', (req, res) => {
//     res.send('Hello World!')
// });

router.get("/", (req, res) => {
    console.log("i am here");
    db("recipes")
      .then(recipe => {
        res.status(200).json(recipe);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    db('recipes')
        .insert(req.body)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error'})
        })
})
module.exports = router; 