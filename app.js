// imports the express library code
const express = require('express');
// invoke express() and return an application object
const app = express();
const studentsController = require('./controllers/studentsController');

app.use('/students', studentsController);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


module.exports = app;
