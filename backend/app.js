const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


routeUser = require('./routes/users');
routeProfile = require('./routes/profiles');
routeAcess_level = require('./routes/acess_levels');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization'
    );

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        res.status(200);
    }

    next();
})

app.use('/users', routeUser);
app.use('/profiles', routeProfile);
app.use('/acess_level', routeAcess_level);

module.exports = app;