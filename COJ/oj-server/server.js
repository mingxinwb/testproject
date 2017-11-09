const express = require('express');
const app = express();
const http = require('http');
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds155315.mlab.com:55315/coj-problemlist', { useMongoClient: true });
const path = require('path');
const socketIo = require('socket.io');

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.use('/api/v1', restRouter);

app.use(express.static(path.join(__dirname, '../public/')));

app.use((req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
});

const io = socketIo();
const editorSocketService = require('./services/editorSocketService')(io);
const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('error', onError);
server.on('listening', onListening);

function onError() {
    throw error;
};

function onListening() {
    const addr = server.address();
    console.log('listening on ' + addr.port);
};