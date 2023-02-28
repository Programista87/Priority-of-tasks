class UserController {
    showUser (req, res)  {
        const { id } = req.params;
        const user = users.find(x => x.id === parseInt(id));

        res.render('pages/user.ejs', {
            user,
            title: `Hello ${id}`,
            url: req.url
        });
    }
}

module.exports = UserController;