import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema({
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


module.exports = mongoose.models.Cart || mongoose.model('Cart', CartSchema)