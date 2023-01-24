const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const path = require('path');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
});


app.use(bodyParser.json({type: 'application/*+json'}));


// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username);


    app.post('/api/users', jsonParser, function (req, res) {
        // create user in req.body
    });

});

app.listen(port);






