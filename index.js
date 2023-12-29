const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/user',userRoute);

module.exports = app;