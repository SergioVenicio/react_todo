const app = require('./config/server')
const db = require('./config/database')
require('./config/routes')(app)
