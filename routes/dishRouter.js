
const router = require('express').Router();

const dish  = require('../controllers/dishController.js');


router.post('/', dish.addDish)

// router.get('/:id/students', dishs.getAlldishStudents)

router.get('/',dish.getAllDish)

router.get('/:id', dish.getSingleDish)

router.put('/:id', dish.updateDish)

router.delete('/:id', dish.deleteDish)

module.exports = router