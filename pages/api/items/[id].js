import dbConnect from '../../../lib/dbConnect'
import Item from '../../../models/Item'

dbConnect();


export default async (req,res) => {

    const { id } = req.query
    

    
    console.log(id)
    
    try {
     
      const items = await Item.find({_id : id})
      res.status(201).json({success:true, data:items})
  } catch (error) {
      res.status(400).json({success:false,data:error})
  }
  }