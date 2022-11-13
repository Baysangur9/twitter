const Post = require('../models/posts.model')

module.exports.postController = {
    addPost: (req, res) => {
      Post.create({
        text: req.body.text,
        users: req.body.users
      }).then((data) => {
         res.json(data)
      })
    },
    getAllPosts: (req,res) => {
        Post.find().populate('likes').then((data) =>{
           res.json(data)
        })
    },
    getPostById: (req,res) => {
        Post.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    deletePost: (req, res) => {
        Post.findByIdAndDelete(req.params.id).then((data) =>{
            res.json('Post deleted')
        })
    },
    updatePost: (req,res) => {
        Post.findByIdAndUpdate(req.params.id).then((data) =>{
            res.json(data)
        })
    },
    addLike:(req,res) => {
        Post.findByIdAndUpdate({_id:req.params.id}, {$push: {likes:req.body.likes}},{new:true}).then((data) => {
            res.json(data)
        })
    }
}