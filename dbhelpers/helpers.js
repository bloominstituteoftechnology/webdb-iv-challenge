const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  getDishes: () => {
    return db("dishes")
      .then(rows => {
        console.log(rows);
        return rows;
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  addDish: (body) => {
    return db("dishes").insert({ ...body });
  },
  getDish:(id)=>{
    return db("dishes")
    .where({"dishes.id":id})
    .join('recipes','dishes.id','=','recipes.dish_id')
      .then(rows => {
        console.log(rows);
        return rows;
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  getDishes: () => {
    return db("dishes")
      .then(rows => {
        console.log(rows);
        return rows;
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  // delete:(id,which)=>{
  //   return db(which)
  //   .where({"id":id})
  //   .del();
  // },

  // edit: (id, body,which)=>{
  //   return db(which)
  //   .where({"id":id})
  //   .update({...body})
  // },
  // studentsIn: (id)=>{
  //   return db("students")
  //   .where({"cohort_id":id})
  //   .then(rows => {
  //     console.log(rows);
  //     return rows;
  //   })
  //   .catch(function(error) {
  //     console.error(error);
  //   });
  // }
};
