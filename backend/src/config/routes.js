const express = require('express')

module.exports = (app) => {
  // API router
  const router = express.Router()
  app.use('/api', router)

  // TODO
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos')
}
