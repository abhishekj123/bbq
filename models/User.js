import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
})

const NoteSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true, 'Please add the title'],
        unique: true,
        trim:true,
        maxlength: [40 , 'The title cannot be more than 40 character']
    },
    description:{
        type:String,
        required: [true, 'Please add the description'],
        unique: true,
        trim:true,
        maxlength: [200 , 'The desc cannot be more than 40 character']
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema)