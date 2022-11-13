const { Router } = require('express')
const route = Router()
const { commentsController } = require('../controllers/comments.controllers')

route.get('/comments', commentsController.getComments)
route.delete('/comments/:id', commentsController.deleteComment)
route.post('/comments', commentsController.addComment)
route.patch('/comments/:id', commentsController.updateComment)






module.exports = route