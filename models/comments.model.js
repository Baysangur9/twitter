const momgoose = require('mongoose')

const commentsSchema = momgoose.Schema = ({
    title: String,
    subtitle: String,
    user: {
        type : momgoose.Schema.Types.ObjectId,
        ref: 'Users'
    },

    posts: {
        type: momgoose.Schema.Types.ObjectId,
        ref: 'Posts'
    }

})








const  Comment = momgoose.model('Comment', commentsSchema) 
module.exports = Comment