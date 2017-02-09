// Mongoose Schema and Models goes here

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,
  completed: Boolean
})

const toDo = mongoose.model('todo', todoSchema)

module.exports = toDo
