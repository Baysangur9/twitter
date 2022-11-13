const momgoose = require('mongoose')

const usersSchema = momgoose.Schema = {
   name: String,
   aboutMe: String,
   saves: [{
    type: momgoose.Types.ObjectId,
    ref: 'Posts'
   }]
    
}






const Users = momgoose.model('Posts',usersSchema  )
module.exports = Users