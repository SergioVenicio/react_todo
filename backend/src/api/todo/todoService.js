const TodoModel = require('./todo')

TodoModel.methods(['get', 'post', 'put', 'delete'])
TodoModel.updateOptions({ new: true, runValidators: true })

module.exports = TodoModel
