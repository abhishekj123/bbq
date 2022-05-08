import React, { useEffect , useState } from 'react'
import { useRouter } from "next/dist/client/router"
import axios from 'axios'
import { Navbar , Menu , Gallery , SimpleCollapse , Card} from '../../components/components' 
import Image from 'next/image'
import Rating from '@mui/material/Rating';
//import Carousel from 'react-material-ui-carousel'
import Carousel from 'react-elastic-carousel'

const Item = ({ item }) => {

    const router = useRouter();
    const [itemData, setitemData] = useState(...item)
    const [addonItem, setaddonItem] = useState([])
    const [page, setPage] = useState(0)
    const { id } = router.query

    useEffect(() => {

        
        const loadPost = async () => {
  
            const response = await axios.get(
            "http://localhost:3000/api/items/Paginate/8/0");
            console.log('----------- a --------------')
            console.log(response.data.data)
            setaddonItem([...response.data.data])
            console.log('----------- a --------------')
        }
        loadPost();
        console.log('----------1---------------')

        console.log(addonItem)
        console.log('-----------1--------------')
    }, [])
    

    

  return (
    <div>
        <Navbar/>
    <br></br>
    <div className='Item-main'>
        <div className='Item-panel-1'>
            <Image
                src='https://firebasestorage.googleapis.com/v0/b/jetsea.appspot.com/o/yahts%2Fyaht.png?alt=media&token=dc4c2a5f-655c-4317-be80-68d6580c5a99'
                alt="Picture of the author"
                width="450px"
                height="300px"
            />
        </div>
        <div className='Item-panel-2'>
            <h1 className='Item-Title'>{itemData.title}</h1>
            <br></br>
            <p>{itemData.description}</p>
                <br></br>
                
            <Rating name="read-only" value='4' readOnly />
            <div>
            <p className='text-light'>Quantity</p>
            </div>
            <p className='text-light'>M.R.P   : <span className='text-bold'><span>$</span> {itemData.price}</span>    <span className='spaceing'>Inclusice of all taxes</span></p>
            <br></br>
            <button className='add-to-cart'>Add to cart</button>
            <br></br>
            <br></br>
            <p className='high-light'>ADD ON</p>
            <div className='description-panel'>
            
            </div>
            <SimpleCollapse/>
            
        </div>
    </div>
    <div className='secoundary-panel'>
    <div className='line'></div>
    <br></br>
    <p className='high-light'>Description</p>
    <br></br>
    <div className='description-panel'>
    <Slider arrayItem={addonItem}/>
    </div>
    <br></br>
    </div>
        
    </div>
  )
}

export default Item


export async function getServerSideProps(router) {
    
    const { id } = router.query
    const response = axios.get(
        'http://localhost:3000/api/items/'+ id);
    return {
      props: {
          item:(await response).data.data
      }, // will be passed to the page component as props
    }
  }



const Slider = (props) => {
  
    
    console.log("----------- ARRAY ITEM ------------------")
    let itemArray=[...props.arrayItem]
    console.log(itemArray)
    {
        itemArray.map(x => {
            console.log
        })
    }
    console.log("----------- ARRAY ITEM ------------------")
    return (
        <div className='addon-slider'>
            <Carousel itemsToShow={5}>
            {
                itemArray.map(x => 
                    
                    <Card title={x.title} id={x._id} description={x.description}/>
                )
            }
                
            
            </Carousel>

</div>
)
}

