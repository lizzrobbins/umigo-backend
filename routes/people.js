const express = require('express');
const router = express.Router();
const query = require('../db/query')

// read
router.get('/', (req, res) => {
  query.getPeople()
    .then((people) => {
      res.json(people)
    })
})

router.get('/people/:id', (req, res) => {
  let id = req.params.id
  query.getPeopleById(id)
    .then((people) => {
      res.json(people)
    })
})

module.exports = router;
