const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect(
  'mongodb://mongo_user:mongo_pwd@localhost/todo?authSource=admin',
  {useNewUrlParser: true, useUnifiedTopology: true}
)
