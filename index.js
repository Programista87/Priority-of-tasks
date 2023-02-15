const express = require('express');
const port = 3000;
const path = require('path');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(ejsLayouts);
app.set('layout', './layouts/main');

app.get('/', (req, res) => {
    res.render('login.ejs', {
        title: 'Login'
    });
});



app.get('/home', (req, res) => {
   const { name } = req.params;

   res.render('home.ejs', {
       title: `Prioritize Homepage Hello ${name}`
   });
});

app.get('*', (req,res) => {
    res.render('errors/404', {
        title: 'No website',
        layout: 'layouts/err'
    });
});


app.listen(port);






