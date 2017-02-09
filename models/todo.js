// Mongoose Schema and Models goes here

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: {type: String, min:5, default:'Untitled task', required:true},
  description: {type: String, default: 'my task'},
  completed: {type: Boolean, default: false}
})

const toDo = mongoose.model('todo', todoSchema)

module.exports = toDo
