const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger_output.json')

routeUser = require('./routes/users');
routeProfile = require('./routes/profiles');
routeAccess_level = require('./routes/access_levels');


const app = express();


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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routeUser);
app.use(routeProfile);
app.use(routeAccess_level);

module.exports = app;