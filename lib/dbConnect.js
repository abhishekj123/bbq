import mongoose, { mongo } from 'mongoose'

const connection = {};

async function dbConnect()  {
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect('mongodb+srv://ABHI007:ABHI007@cluster0.t6ev8.mongodb.net/nextAuthDB?retryWrites=true&w=majority',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })

    connection.isConnected = db.connections[0].readyState
    console.log(connection.isConnected)
}

export default dbConnect;