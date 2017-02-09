// TODO. import TODO Model ;-)
const Todo = require('../models/todo')

function create (params) {
  // create a new TODO and console log the response
  Todo.create(params, function (err, created) {
    if (err) {
      console.error(err)
      return
    }
    console.log(created)
  })
}

function list () {
  // console log the list of all TODOs
  Todo.find({}, function (err, founds) {
    if (err) {
      console.error(err)
      return
    }
    // console.log(founds)
    founds.forEach(function (found) {
      console.log('task: ' + found.name)
    })
  })
}

function show (id) {
  // find the TODO with this id and console log it
  Todo.findById(id, function (err, idFound) {
    if (err) {
      console.error(err)
      return
    }
    // console.log(idFound)
    console.log('id ' + id + ' found, task is: ' + idFound.name)
  })
}
function update (id, params) {
  // find the TODO with this id and update it's params. console log the result.
  var query = {'_id': id}
  var updateInfo = params
  Todo.findOneAndUpdate(query, updateInfo, function (err, updated) {
    if (err) {
      console.error(err)
      return
    }
    console.log(updated)
  })
}
function destroy (id) {
  // find the TODO with this id and destroy it. console log success/failure.
  Todo.findByIdAndRemove(id, function (err, removedId) {
    if (err) {
      console.error(err)
      return
    }
    console.log(removedId)
  })
}

function destroyAll () {
  // find the TODO with this id and destroy it. console log success/failure.
  Todo.remove({}, function (err, removedId) {
    if (err) {
      console.error(err)
      return
    }
    console.log('All destroyed')
  })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy,
  destroyAll
}
