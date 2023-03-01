class PageController {
    showHome (req, res)  {
        res.render('./pages/home.ejs', {
            title: 'Prioritize - Home',
            url: req.url
        });
    }

    showDashboard (req, res) {
        res.render('pages/dashboard.ejs', {
            title: 'Dashboard - check yourself out ',
            url: req.url
        });
    }
    showTask  (req, res) {
        res.render('pages/tasks.ejs', {
            title: 'Your Task and progress',
            url: req.url
        });
    }

    showProjects  (req, res)  {
        res.render('pages/projects.ejs', {
            title: 'Projects in use',
            url: req.url
        });
    }

    showCalendar (req, res)  {
        res.render('pages/calendar.ejs', {
            title: 'Mark this',
            url: req.url
        });
    }

    showTimesheet  (req, res) {
        res.render('pages/timesheet.ejs', {
            title: 'Time is money',
            url: req.url
        });
    }
}

module.exports = new PageController();