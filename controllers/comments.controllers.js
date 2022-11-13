const Comment = require('../models/comments.model')

module.exports.commentsController = {
    addComment: (req,res) => {
        Comment.create({
            text: req.body.title,
            users:req.body.subtitle,
            posts: req.body.posts
        }).then((data) => {
         res.json(data)
        })
    },
    getComments: (req,res) => {
        Comment.find().then((data) => {
            res.json(data)
        })
    },
    deleteComment: (req,res) => {
        Comment.findByIdAndDelete(req.params.id).then((data) => {
            res.json('Comments deleted')
        })
    },

    updateComment:(req,res) => {
        Comment.findByIdAndUpdate(req.params.id,{
            text: req.body.title,
            users:req.body.subtitle,
            posts: req.body.posts
        },{new: true}).then((data) => {
            res.json(data)
      })
    }
}