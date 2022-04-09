const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


routeUser = require('./routes/users');
routeProfile = require('./routes/profiles');
routeAcess_level = require('./routes/acess_levels');


const app = express();

/*atualizacao do banco de dados, caso exista inclusao de tabelas
(async () => {
    const db = require('./db');
    const Acess_levels = require('./models/acess_levels');
    const Users = require('./models/users');
    const Profiles = require('./models/profiles')

    await db.sync({ force: true });
})();
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
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