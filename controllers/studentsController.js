const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Here are the students')
});

router.get('/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Profile: ${name}`);
})

module.exports = router;
