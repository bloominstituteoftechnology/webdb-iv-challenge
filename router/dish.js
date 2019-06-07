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
   
    db("dish_table")
      .then(dish => {
        res.status(200).json(dish);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.get("/:id", (req, res) => {
    db("dish_table")
      .where({ id: req.params.id })
      .first()
      .then(dish => {
        if (dish) {
          res.status(200).json(dish);
        } else {
          res.status(404).json({ message: "no such dish yet" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    db('dish_table')
        .insert(req.body)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal server error'})
        })
})

  router.put("/:id", (req, res) => {
    db("dish_table")
      .where({ id: req.params.id })
      .update(req.body)
      .then(count => {
        if (count > 0) {
          res.status(200).json({
            message: `${count} ${count > 1 ? "dish" : "dish"} updated`
          });
        } else {
          res.status(400).json({ message: "no such dish exists" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.delete("/:id", (req, res) => {
    db("dish_table")
      .where({ id: req.params.id })
      .del()
      .then(count => {
        if (count > 0) {
          res.status(200).json({
            message: `${count} ${count > 1 ? "dish" :"dish"} deleted`
          });
        } else {
          res.status(404).json({ message: "no such student exists" });
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
 

module.exports = router; 