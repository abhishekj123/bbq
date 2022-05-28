import dbConnect from '../../../lib/dbConnect'
import Cart from '../../../models/Cart'

dbConnect();


export default async (req,res) => {
    const { method } = req;
    switch(method) {
        case 'GET' :
            try {
                const items = await Cart.find()
                res.status(200).json({success:true, data:items})
            } catch (error) {
                res.status(400).json({success:false})
            }
            break;
        case 'POST' :
            try {
                const items = await Cart.create(req.body)
                res.status(201).json({success:true, data:items})
            } catch (error) {
                res.status(400).json({success:false,data:error})
            }
            break;
        case 'GET' :
            try {
                const { page =1 , limit =10 } =req.query;
                const items = await Cart.find().limit(10 ).skip((page-1)*limit)
                res.status(201).json({success:true, data:items})
            } catch (error) {
                res.status(400).json({success:false,data:error})
            }
            break;
        default:
        res.status(400).json({success:false})
        break;

    }
}