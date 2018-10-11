const express = require('express');

const dishes = require('./Model.js');

const router = express.Router();

// get a list of dishs
router.get('/', (req, res) => {
  dishes
    .find()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => res.status(500).json(err));
});

// get a dish by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const dish = await dishes.findById(id);

    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: 'dish not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// // get students by a dish id
// router.get('/:id/students', async (req, res) => {
//     const { id } = req.params;
//     const students = await dishs.findStudentsById(id);

//     if(students) { 
//       res.status(200).json(students)
//     } else {
//       res.status(404).json({ message: 'students not found in specified dish or dish does not exist'});
//     } 

// })

// create dishs
router.post('/', (req, res) => {
  const dish = req.body;

  dishs
    .add(dish)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// update dishs
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  dishs
    .update(id, changes)
    .then(count => {
      if (!count || count < 1) {
        res.status(404).json({ message: 'No records found to update' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json(err));
});

// delete dishs
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  dishs
    .remove(id)
    .then(count => {
      if (!count || count < 1) {
        res.status(404).json({ message: 'No records found to delete' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
