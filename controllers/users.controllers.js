const Users = require('../models/users.route')
const momgoose = require('mongoose')

module.exports.usersController = {
   addUsers: (req, res) => {
     Users.create({
        name: req.body.name,
        aboutMe: req.body.aboutMe,
     }).then((data) => {
         res.json(data)
     })
  },
   getAllUsers: (req,res) => {
    Users.find().populate('saves').then((data) => {
       res.json(data)
    })
   },
   getUsersById: (req,res) => {
     Users.findById(req.params.id).then((data) =>{
        res.json(data)
     })
   },
   deleteUsersById: (req, res) => {
    Users.findByIdAndDelete(req.params.id).then((data) =>{
        res.json('User deleted')
    })
   },
   addSaves: (req, res) => {
    Users.findByIdAndUpdate({ _id: req.params.id }, { $push: { saves: req.body.saves } }, { new: true }).then((data) => {
        res.json(data)
    })
   }

}