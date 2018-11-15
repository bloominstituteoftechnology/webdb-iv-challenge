const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)



const controllersDish = {
  addDish (req, res, next) {
    if (!req.body.name || req.body.length <= 0) {
      next(new Error('EMPTY BODY'))
    }
    const dishName = req.body
    db('dish')
      .insert(dishName)
      .then((id) => res.status(201).json(id))
      .catch(next)
  },
  // getAllDish (req, res, next) {
  //   db('students')
  //     .select()
  //     .where('dish_id', req.params.id)
  //     .then((students) => {
  //       if (!students.length) {
  //         next(new Error('ID NOT FOUND'))
  //       }
  //       res.status(200).json(students)
  //     })
  //     .catch(next)
  // },
  getAllDish (req, res, next) {
    db('dish').then((dish) => res.status(200).json(dish)).catch(next)
  },
  getSingleDish (req, res, next) {
    db('dish')
      .where('id', req.params.id)
      .then((dish) => {
        if (!dish.length) {
          next(new Error('ID NOT FOUND'))
        }
        res.status(200).json(dish)
      })
      .catch(next)
  },
  updateDish (req, res, next) {
    if (req.body.name.length <= 0) {
      next(new Error('needs update content'))
    }
    db('dish')
      .where('id', req.params.id)
      .update(req.body)
      .then((count) => {
        console.log(count)
        if (count <= 0) {
          next(new Error('ID NOT FOUND'))
        }
        res.status(200).json(count)
      })
      .catch(next)
  },
  deleteDish (req, res, next) {
    db('dish')
      .where('id', req.params.id)
      .del()
      .then((count) => {
        if (count <= 0) {
          next(new Error('ID NOT FOUND'))
        }
        res.status(200).json(count)
      })
      .catch(next)
  }
}
module.exports = controllersDish
