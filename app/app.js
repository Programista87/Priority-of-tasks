const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const path = require("path");

//init database
require('./db/mongoose');

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join('views'));

// set layout
app.use(ejsLayouts);
app.set('layout', './layouts/main');

//public folder
app.use(express.static('public'));

/*// users
const users = [
    {id:1, name: 'Sloniu', email: 'sloniu.hack@wp.pl'},
    {id:2, name: 'Aleksandra', email: 'ola@wp.pl'},
    {id:3, name: 'Piotr', email: 'piotr@wp.pl'},
    {id:4, name: 'Michal', email: 'michal@wp.pl'},
];*/

// mount routes
app.use(require('./routes/web.js'));

module.exports = app;