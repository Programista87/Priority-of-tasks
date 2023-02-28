const express = require('express');
const router = new express.Router();
router.get('/', (req, res) => {
    res.render('./pages/home.ejs', {
        title: 'Prioritize - Home',
        url: req.url
    });
});

router.get('/login', (req, res) => {
    /*const { name } = req.params;*/

    res.render('pages/login.ejs', {
        title: `Prioritize Login Hello`,
        url: req.url
    });
});

router.get('/dashboard', (req, res) => {
    res.render('pages/dashboard.ejs', {
        title: 'Dashboard - check yourself out ',
        url: req.url
    });
});

router.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(x => x.id === parseInt(id));
    res.render('pages/user.ejs', {
        user,
        title: `Hello ${id}`,
        url: req.url
    });
});

router.get('/tasks', (req, res) => {
    res.render('pages/tasks.ejs', {
        title: 'Your Task and progress',
        url: req.url
    });
});

router.get('/projects', (req, res) => {
    res.render('pages/projects.ejs', {
        title: 'Projects in use',
        url: req.url
    });
});

router.get('/calendar', (req, res) => {
    res.render('pages/calendar.ejs', {
        title: 'Mark this',
        url: req.url
    });
});

router.get('/timesheet', (req, res) => {
    res.render('pages/timesheet.ejs', {
        title: 'Time is money',
        url: req.url
    });
});

router.get('*', (req, res) => {
    res.render('errors/404', {
        title: 'No website',
        layout: 'layouts/err',
        url: req.url
    });
});

module.exports = router;