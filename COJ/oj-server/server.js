const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds155315.mlab.com:55315/coj-problemlist', { useMongoClient: true });

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.use('/api/v1', restRouter);

app.use(express.static(path.join(__dirname, '../public/')));

app.use((req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));