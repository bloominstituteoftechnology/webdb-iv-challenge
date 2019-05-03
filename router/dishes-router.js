const router = require('express').Router()

const Dishes = require('./dishes-model')


router.get('/dishes/', (req, res) => {
    Dishes.find()
    .then(dishes => {
        res.status(200).json(dishes)
    })
    .catch(error => {
        res.status(500).json({message: 'we ran into error retrieving the track'})
    })
})

router.get('/dishes/:id/', async (req, res) => {
    try {
      const dishes = await Dishes.findById(req.params.id);
      if (dishes) {
        res.status(200).json(dishes);
      } else {
        res.status(404).json({ message: 'We could not find the dish' });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error retrieving the dish' });
    }
  });
  
  router.post('/dishes/', async (req, res) => {
    const dish = req.body;
    if (dish.name) {
      try {
        const inserted = await Dishes.add(dish);
        res.status(201).json(inserted);
      } catch (error) {
        res
          .status(500)
          .json({ message: 'We ran into an error creating the dish' });
      }
    } else {
      res.status(400).json({ message: 'Please provide name of the dish' });
    }
  });
  
  router.put('/dishes/:id/', async (req, res) => {
    const changes = req.body;
  
    if (changes.name) {
      try {
        const updated = await Dishes.update(req.params.id, changes);
        if (updated) {
          res.status(200).json(updated);
        } else {
          res.status(404).json({
            message: 'That dish does not exist',
          });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: 'We ran into an error updating the dish' });
      }
    } else {
      res.status(400).json({
        message: 'Please provide the name of the dish',
      });
    }
  });
  
  router.delete('/dishes/:id/', async (req, res) => {
    try {
      const dishes = await Dishes.remove(req.params.id);
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({
          message: 'That dish does not exist, perhaps it was deleted already',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error removing the dish' });
    }
  });
  
  module.exports = router;