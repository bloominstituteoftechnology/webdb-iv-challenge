const express = require('express');

const db = require('./db.js');

const server = express();

server.use(express.json());

// connect to the database

server.get('/', (req, res) => {
  res.send('api working');
});

server.get('/api/dishes', (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => res.status(500).json(err));
});

server.get('/api/dishes/:id', (req, res) => {
    const id = req.params.id;
    db.getDish(id)
        .then(dish => {
        if (dish) {
            res.status(200).json(dish);
        } else {
            res.status(404).json({ message: 'dish not found' });
        }
        });
});

server.get('/api/dishes/:id/list', (req, res) => {
    const id = req.params.id;
    db.getShoppingList(id)
        .then(dish => {
        if (dish) {
            res.status(200).json(dish);
        } else {
            res.status(404).json({ message: 'dish not found' });
        }
        });
});

server.get('/api/recipes', (req, res) => {
    db.getRecipes()
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(err => res.status(500).json(err));
  });

// server.get('/api/dishes/:id/students', (req, res) => {
//     let {id} = req.params;

//     db('students')
//       .where({ dish_id: id })
//       .then(student => {
//         if (student) {
//           res.status(200).json(student);
//         } else {
//           res.status(404).json({ message: 'students not found' });
//         }
//     });
// });

// server.post('/api/dishes', (req, res) => {
  
//   db('dishes')
//     .insert(req.body)
//     .then(ids => {
//       db('dishes')
//         .where({ id: ids[0] })
//         .then(dish => {
//           res.status(201).json(dish);
//         });
//     })
//     .catch(err => res.status(500).json(err));
// });

// server.delete('/api/dishes/:id', (req, res) => {
//   db('dishes')
//     .where({ id: req.params.id })
//     .del()
//     .then(count => {
//       res.status(200).json(count);
//     })
//     .catch(err => res.status(500).json(err));
// });

// server.put('/api/dishes/:id', (req, res) => {
//   const changes = req.body;

//   db('dishes')
//     .where({ id: req.params.id })
//     .update(changes)
//     .then(count => {
//       if (count) {
//         res.status(200).json(count);
//       } else {
//         res.status(404).json({ message: 'dish not found' });
//       }
//     })
//     .catch(err => res.status(500).json(err));
// });



server.listen(6000, () => console.log('server up on 6000'));