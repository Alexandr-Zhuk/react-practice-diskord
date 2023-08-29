const express = require('express');
const server = express();
const cors = require('cors');
const mainRouter = require('../routes/mainRouter');
//const mongoose = require('mongoose')
//mongoose.connect('mongodb://127.0.0.1:27017/toDoList');

server.listen(3001);

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');
server.use(cors({
    origin: '*',
    methods: ['GET','POST']
}));
server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use(express.static(__dirname + '/public'));
server.use('/main', mainRouter);