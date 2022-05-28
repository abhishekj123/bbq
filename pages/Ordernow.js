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


