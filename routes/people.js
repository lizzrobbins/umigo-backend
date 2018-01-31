const express = require('express');
const router = express.Router();
const query = require('../db/query')

// read
router.post('/login', (req, res, next) => {
  query.verifyLogin(req.body.data).then(data => {
    res.json(data)
  })
});
router.get('/', (req, res) => {
  query.getPeople().then((people) => {
    res.json(people)
  })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  query.getPeopleById(id).then((people) => {
    res.json(people)
  })
})

module.exports = router;
