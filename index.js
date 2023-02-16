const express = require('express');
const port = 3000;
const path = require('path');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// set layout
app.use(ejsLayouts);
app.set('layout', './layouts/main');
//public folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/home.ejs', {
        title: 'Prioritize - Home',
        url: req.url
    });
});

app.get('/login', (req, res) => {
   /*const { name } = req.params;*/

   res.render('pages/login.ejs', {
       title: `Prioritize Login Hello`,
       url: req.url
   });
});

app.get('/dashboard', (req, res) => {
    res.render('pages/dashboard.ejs', {
        title: 'Dashboard - check yourself out ',
        url: req.url
    });
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    const user = user.find(x => x.id === parseInt(id));
    res.render('pages/user.ejs', {
        user: user,
        title: `Hello ${id}`,
        url: req.url
    });
});

app.get('/tasks', (req, res) => {
    res.render('pages/tasks.ejs', {
        title: 'Your Task and progress',
        url: req.url
    });
});

app.get('/projects', (req, res) => {
    res.render('pages/projects.ejs', {
        title: 'Projects in use',
        url: req.url
    });
});

app.get('/calendar', (req, res) => {
    res.render('pages/calendar.ejs', {
        title: 'Mark this',
        url: req.url
    });
});

app.get('/timesheet', (req, res) => {
    res.render('pages/timesheet.ejs', {
        title: 'Time is money',
        url: req.url
    });
});

app.get('*', (req, res) => {
    res.render('errors/404', {
        title: 'No website',
        layout: 'layouts/err',
        url: req.url
    });
});

app.listen(port);






