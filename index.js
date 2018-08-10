const express =  require('express')

const db = require('./data/db')

const server = express()
server.use(express.json())


const PORT = 3300

server.get('/dishes', (req,res) => {
  db('dishes')
  .then(dish => {
    res.status(200).json(dish)
  })
  .catch((err) => {
    res.status(500).json(err)
  })
})

server.get('/dishes/:id', (req, res) => {
  const id = req.params.id;
  db('dishes').where('id', id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(response => {
      res.status(500).json(err);
    });
});

server.post('/dishes', (req, res) => {
  const dish = req.body
  db.insert(dish).into('dishes')
    .then(response => {
      res.status(200).json(response)
    })
    .catch(response => {
      res.status(500).json(err);
    });
});

server.delete('/users/:id', (req, res) => {
  const id = req.body.id;
  db('users').where('id', id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(response => {
      res.status(500).json(err);
    });
});

server.put('/dishes/:id', (req, res) => {
  const id = req.params.id;
  const recipe = req.params.id;
  db('users').where('id', id)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  });
});
 
//=========Recipes==========

server.get('/recipes', (req, res) => {
  db('recipes')
  .then(response => {
    res.status(200).json(response);
  })
  .catch(response => {
    res.status(500).json(err);
  });
});

server.get('/recipes:id', (req, res) => {
  const id = req.body.id;
  db('recipes').where('id', id)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  });
});

server.post('/recipes', (req, res) => {
  const recipe = req.body
  db.insert(dish).into('recipes')
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  });
});

server.delete('/recipes/:id', (req, res) => {
  const id = req.params.id;
  db('users').where('id', id)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  });
});

server.put('/recipes/:id', (req, res) => {
  const id = req.params.id;
  const recipe = req.params.id;
  db('users').where('id', id)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  });
});

server.listen(PORT, () => {
  console.log(`Server up on ${PORT}`)
})
