const express = require('express')
const cookbook = require('./access.js')
const router = express.Router()

router.route('/dishes')
  .get((req, res) => {
    cookbook.getDishes()
      .then(dishes => {
        if (!dishes || dishes < 1 ) return res.status(404).json({ error: 'Dishes could not be found.' })
        return res.status(200).json(dishes)
      })
      .catch(err => res.status(500).json({ error: 'Dishes could not be retrieved' }));
  })

module.exports = router