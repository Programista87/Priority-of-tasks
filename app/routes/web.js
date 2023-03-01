const express = require('express');
const router = new express.Router();
const UserController = require('../controllers/user-controller');
const PageController = require('../controllers/page-controller');
const ErrorController = require('../controllers/error-controller');
router.get('/', PageController.showHome);

router.get('/profile/:id', UserController.showUser);

router.get('/login', UserController.showLogin);

router.get('/dashboard', PageController.showDashboard);

router.get('/tasks', PageController.showTask);

router.get('/projects', PageController.showProjects);

router.get('/calendar', PageController.showCalendar );

router.get('/timesheet', PageController.showTimesheet);

router.get('*', ErrorController.showNoFound);

module.exports = router;