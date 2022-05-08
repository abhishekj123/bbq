import React , { useEffect , useState } from 'react'
import { Navbar , Menu , Gallery } from '../components/components' 
import axios from 'axios'
import Image from 'next/image'
import { usePagination } from '@mui/material/Pagination';
import { Pagination } from '@mui/material';

const Ordernow = () => {

    const [orderItem, setorderItem] = useState([])
    const [page, setPage] = useState(0)

   

    useEffect(() => {

        
        const loadPost = async () => {
  
            const response = await axios.get(
            "http://localhost:3000/api/items/Paginate/8/"+`${page}`);
            console.log('-------------------------')
            console.log(response.data.data)
            setorderItem([...response.data.data])
            console.log('-------------------------')
        }
        loadPost();
        console.log('----------1---------------')

        console.log(orderItem)
        console.log('-----------1--------------')
    }, [page])
    

  return (
    <div>
        <Navbar/>
        <div className='Order-panel'>
            <div className='Order-Panel-1'>Hi</div>
            <div className='Order-Panel-2'>
                <div className='Order-Item-Panel'>
            
            {
                orderItem.map(a => 
                   
                    <ItemCard name={a.title} desc={a.description} id={a._id}/>
                    )
            }
            
                </div>
            <div className='Paginate-panel'>
                
                <Pagination 
                    count={10} 
                    variant="outlined" 
                    color="secondary" 
                    defaultPage={page}
                    onChange={(event, value) => setPage(value)}
                    />
            </div>
            
            
            </div>
            
            
        </div>
    </div>
  )
}

export default Ordernow


const ItemCard = (props) => {
    return (
    <div className='ItemCard'>
    <a href={'http://localhost:3000/items/'+`${props.id}`}>
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/restuarantsig.appspot.com/o/restimage%2FNoodles3.png?alt=media&token=5e02bda3-0ad0-40a5-aa45-46541fd28a55"
      alt="Picture of the author"
      width="350px"
      height="200px"
    />
    <div className='ItemCard-Title'>
        <h1 className='bbq-text-heading-1'>{props.name}</h1>
    </div>
    <div className='ItemCard-Desc'>
        <p className='desc-limit'>{props.desc}</p>
    </div>
    <div className='ItemCard-Bottom'>
        <button>Add to Cart</button>
    </div>
    </a>
    </div>
    )
}