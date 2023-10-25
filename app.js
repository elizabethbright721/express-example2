// imports the express library code
const express = require('express');
// invoke express() and return an application object
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/students', (req, res) => {
  res.send('Here are the students')
});

app.get('/students/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Profile: ${name}`);
})

module.exports = app;
