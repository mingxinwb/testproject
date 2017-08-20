const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds117093.mlab.com:17093/cs503');

const restRouter = require('./routes/rest');

app.get('/', (req, res) => {
  res.send('Hello Doris!')
});

app.use('/api/v1', restRouter);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});