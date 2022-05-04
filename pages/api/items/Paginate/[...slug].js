import dbConnect from '../../../../lib/dbConnect'
import Item from '../../../../models/Schema'
import { useRouter } from 'next/router'

dbConnect();


export default async (req,res) => {
    const { slug } = req.query
    console.log(slug[1])
    let page=slug[0]
    let skip=slug[1]
    try {
     
      const items = await Item.find().limit(page ).skip(skip)
      res.status(201).json({success:true, data:items})
  } catch (error) {
      res.status(400).json({success:false,data:error})
  }
  }