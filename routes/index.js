const { Router} = require('express')
const commentsRoute = require('./comments.route')
const postsRoute = require('./posts.route')
const usersRoute = require('./users.route')
const route = Router()

route.use(commentsRoute)
route.use(postsRoute)
route.use(usersRoute)


module.exports = route