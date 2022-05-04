import { Email } from '@material-ui/icons'
import { timeStamp } from 'console'
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

const ItemSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true, 'Please add the title'],
        
    },
    description:{
        type:String,
        required: [true, 'Please add the description'],
        
    },
    price:{
        type:String,
        required: [true, 'Please add item price'],  
    },
    status:{
        type:Boolean,
        required: [true, 'Please add item status']
    },
    pic:{
        type:String,
        required: [true, 'Please add the description'],
        
    }
})


const OrderSchema = new mongoose.Schema({
    orderId: {
        type:String,
        required: [true, 'Please add the title'],
        unique: true,
        trim:true,
        maxlength: [40 , 'The title cannot be more than 40 character']
    },
    userId: {
        type:String,
        required: [true, 'Please add the title'],
        
    },
    Email: {
        type:String,
        required: [true, 'Please add the title'],
        trim:true,
        maxlength: [40 , 'The title cannot be more than 40 character']
    },
    Date: {
        type:String,
        required: [true, 'Please add the title'],
    },
    items:{
        type:Array,
        required: [true, 'Please add Items in Order'],
        maxlength: [200 , 'The desc cannot be more than 40 character']
    },
    total:{
        type:String,
        required: [true, 'Please add item price'],  
    },
    status:{
        type:Boolean,
        required: [true, 'Please add item status']
    },
    orderStatus:{
        type:String,
        required: [true, 'Please add item price'],  
    }
})

//module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
//module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema)
module.exports = mongoose.models.Item || mongoose.model('Item', ItemSchema)
//module.exports = mongoose.models.Order || mongoose.model('Order', OrderSchema)