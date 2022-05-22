import React , { useEffect , useState } from 'react'
import { Navbar , Mainmenu , Mobilebottommenubar , Drawertogglebutton , Sidebar , Backdrop } from '../components/components' 
import axios from 'axios'
import Image from 'next/image'
import { usePagination } from '@mui/material/Pagination';
import { Pagination } from '@mui/material';

const Ordernow = () => {

    const [orderItem, setorderItem] = useState([])
    const [page, setPage] = useState(0)

    const [sideDrawerOpen, setsideDrawerOpen] = useState(false)

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
    

    const drawerToggleClickHandler = () => {
        setsideDrawerOpen(!sideDrawerOpen)
    }

    const backdropClickHandler = () => {
        setsideDrawerOpen(false)
    }

    let sideBar;
    let backdrop;

    if(sideDrawerOpen){
        
        backdrop= <Backdrop click={backdropClickHandler}/>
    }

  return (
    <div style={{height: '100%'}}>
        <Navbar/>
        <div >
        
            <Mainmenu Items={orderItem}/>
            <Sidebar show={sideDrawerOpen}/>
            {backdrop}
            <Drawertogglebutton drawerClickHandler={drawerToggleClickHandler}/> 
            
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