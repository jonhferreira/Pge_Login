const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [
    './routes/access_levels.js',
    './routes/profiles.js',
    './routes/users.js'
]

swaggerAutogen(outputFile, endpointsFiles)