import dbConnect from '../../../lib/dbConnect'
import Order from '../../../models/Schema'

dbConnect();


export default async (req,res) => {
    const { method } = req;
    switch(method) {
        case 'GET' :
            try {
                const orders = await Order.find()
                res.status(200).json({success:true, data:orders})
            } catch (error) {
                res.status(400).json({success:false}) 
            }
            break;
        case 'POST' :
            try {
                const orders = await Order.create(req.body)
                res.status(201).json({success:true, data:orders})
            } catch (error) {
                res.status(400).json({success:false,data:error})
            }
            break;
        default:
        res.status(400).json({success:false})
        break;

    }
}