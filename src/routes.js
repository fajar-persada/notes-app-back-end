const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNodeByIdHandler
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler
  },
  {
    method: 'PUT',
    path: '/noted/{id}',
    handler: editNoteByIdHandler
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNodeByIdHandler
  }
]

module.exports = routes
