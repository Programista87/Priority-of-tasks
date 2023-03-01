class ErrorController {
    showNoFound  (req, res)  {
        res.render('errors/404', {
            title: 'No website',
            layout: 'layouts/err',
            url: req.url
        });
    }
}

module.exports = new ErrorController();