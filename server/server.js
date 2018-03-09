const express = require('express');
const router = require('./routes/routes.js')
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

mongoose.connect('mongodb://<lilit>:<immalabicackanunne1977>@ds261088.mlab.com:61088/mern');

app.use('/', router);

module.exports=app;
