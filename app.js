const express = require('express');
const port = 3000;
const path = require('path');
const app = express();
// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/public/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/username/:name', (req, res) => {
   const { name } = req.params;
   res.send(`Hello ${name}`);
});

app.listen(port);






