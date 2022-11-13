const momgoose = require('mongoose')

const postsSchema = momgoose.Schema = ({
   users: {
       type: momgoose.Types.ObjectId,
       ref: 'Users'
   },

   likes: [{
    type: momgoose.Types.ObjectId,
    ref: 'Users'
   }]
   

})






const Posts = momgoose.model('Posts',postsSchema )
module.exports = Posts