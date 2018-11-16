const express = require('express');
const knex = require('knex');
// const helmet = require('helmet');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const nameCheck = require('../middleware/nameCheck.js')


const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.json({ api: 'up' });
});

// TABLE SCHEMA
// id: integer, primary key, autoincrements
// dish: string, required, unique (e.g., pizza, tacos)
// recipe: string (e.g., tex-mex taco, tia's tacos)
//    - ingredients: can be used for multiple recipes and recipes may need more than 1 ingredient cotija cheese, mangoes, tomatillo, tortillas. ingredients are objects {name: quantity}.
//    - instructions: list of steps array -- order matters

// Choose dish, choose recipe, get shopping list of ingredients and get instructions

// // endpoints here

// DISHES
// POST: .insert() .into
server.post('/api/dishes', nameCheck, (req, res) => {
  const { name } = req.body;
  const dish = { name };
  console.log(name, dish)
  db('dishes')
    .insert(dish)
    // .returning('*') // other databases allow other items to be returned
    .then(ids => {
      res.status(200).send({ id: ids }); //201 or 200
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error inserting',
        err
      })
    })
})

// // GET (assumes .select())
server.get('/api/dishes', (req, res) => {

  db('dishes')
    //.select()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json({
      err
    }));
});

// GET BY ID
server.get('/api/dishes/:id', (req, res) => {
  const { id } = req.params;

  db('dishes')
    .where({ id: id })
    .then(dishes =>
      dishes[0] ?
      res.status(200).json(dishes[0]) :
      res.status(404).json({
        error: "there is no dish with that id",
        "log": console.log(id)
      })
    )
    .catch(err => res.status(500).json({
      err
    }));
});

// // GET cohort.id matches students.cohort_id
// server.get('/api/cohorts/:id/students', (req, res) => {
//   const { id } = req.params;

//   db('cohorts')
//     .join('students', 'cohorts.id', '=', 'students.cohort_id')
//     .select('*')
//     .then(students => res.status(200).json(students.filter(student => student.cohort_id === `${id}` / 1)))
//     .catch(err => res.status(500).json({
//       err
//     }));
// });


// // PUT .where() .update()
// server.put('/api/cohorts/:id', nameCheck, (req, res) => {
//   const changes = req.body;
//   const { id } = req.params;

//   db('cohorts')
//     .where({ id: id }) // 
//     .update(changes)
//     .then(count => {
//       res.status(200).json({
//         name: changes.name,
//         id: changes.id
//       });
//     })
//     .catch(err => res.status(500).json(err));
// });

// // DELETE .where() .del()
// // Calling .del() without first filtering the records will result on the removal of all the records in the table, be careful!

// server.delete('/api/cohorts/:id', (req, res) => {
//   const { id } = req.params;

//   db('cohorts')
//     .where({ id: id })
//     .del()
//     .then(count => {
//       res.status(200).json({ count });
//     })
//     .catch(err => res.status(500).json(err));
// });

// // STUDENTS
// // POST: .insert() .into
// server.post('/api/students', nameCheck, (req, res) => {
//   const student = req.body;
//   console.log(student)
//   db('students')
//     .insert(student)
//     // .returning('id')
//     .then(ids => {
//       res.status(201).json({ id: ids[0] });
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: 'Error inserting',
//         err
//       })
//     })
// })

// // GET 
// server.get('/api/students', (req, res) => {

//   db('students')
//     .then(students => res.status(200).json(students))
//     .catch(err => res.status(500).json({ err }));
// });

// // GET BY ID
// server.get('/api/students/:id', (req, res) => {
//   const { id } = req.params;
//   console.log( id )
//   db('students')
//     .where({ id: id })
//     .then(students =>
//       students[0]
//       ? res.status(200).json(students[0])
//       : res.status(404).json({
//           error: "there is no student with that id",
//           "log": console.log(id)
//       })
//     )
//     .catch(err => res.status(500).json({
//       err
//     }));
// });


// // PUT .where() .update()
// server.put('/api/students/:id', (req, res) => {
//   const changes = req.body;
//   const {
//     id
//   } = req.params;
//   console.log(changes, id)
//   db('students')
//     .where({
//       id: id
//     }) // 
//     .update(changes)
//     .then(count => {
//       res.status(200).json({
//         name: changes.name,
//         cohort: changes.cohort_id,
//         id: changes.id
//       });
//     })
//     .catch(err => res.status(500).json(err));
// });

// // DELETE .where() .del()
// // Calling .del() without first filtering the records will result on the removal of all the records in the table, be careful!

// server.delete('/api/students/:id', (req, res) => {
//   const { id } = req.params;

//   db('students')
//     .where({
//       id: id
//     })
//     .del()
//     .then(count => {
//       res.status(200).json({
//         count
//       });
//     })
//     .catch(err => res.status(500).json(err));
// });


// // JOIN
// server.get('/api/cohorts-join-students', (req, res) => {
//   return db('cohorts')
//     // .join('students', 'cohorts.id', '=', 'students.cohort_id')
//     .join('students', 'students.cohort_id', '=', 'cohorts.id')
//     // .select('students.name')
//     .select('*')
//     .then(response => {
//       res.status(200).json(response)
//     })
//     .catch(err => res.status(500).json(err));
// })

module.exports = server;