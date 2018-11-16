
const router = require('express').Router();

const recipe  = require('../controllers/recipeController.js');


router.post('/', recipe.addRecipe)

// router.get('/:id/students', dishs.getAlldishStudents)

router.get('/',recipe.getAllRecipe)



module.exports = router