const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds117093.mlab.com:17093/cs503');
const path = require('path');

const indexRouter = require('./routes/index');
const restRouter = require('./routes/rest');

app.use('/', indexRouter);

app.use(express.static(path.join(__dirname, '../public/')));

app.use('/api/v1', restRouter);

app.use((req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});