const express = require('express');
const { getAsync } = require('../redis');
const router = express.Router();

const configs = require('../util/config');

let visits = 0;

/* GET index data. */
router.get('/', async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

// GET statistics data
router.get('/statistics', async (req, res) => {
  const addedTodos = await getAsync('added_todos');
  res.send({
    addedTodos: JSON.parse(addedTodos),
  });
});

module.exports = router;
