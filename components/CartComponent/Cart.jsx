import React , { useEffect , useState } from 'react'
import axios from 'axios'
import { connect } from "react-redux"
import { altercarteobj } from "../../actions"
import { useSelector , useDispatch  } from 'react-redux'
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'

const Cart = () => {

    const [page, setPage] = useState(0)
    const [cartItem, setCartItem] = useState([])
    const dispatch = useDispatch()
    let cartToshow =  useSelector(state => state.isCart)


    useEffect(() => {

        console.log(cartToshow)
        /*
        const loadCart = async () => {
  
            const response = await axios.get(
            "http://localhost:3000/api/cart");
            console.log('-------------------------')
            console.log(response.data.data)
            setCartItem([...response.data.data])
            console.log('-------------------------')
            console.log("pppppppppppppppppppppppppppppppppppppp")
            console.log(cartToshow)
            console.log("88888888888888888888888888888888888")
        }
        loadCart();
        console.log('----------1---------------')

       */
        console.log('-----------1--------------')
    }, [page])

  return (
    <div>
    <div className='Cart-Title-Panel'>
        <p className='Cart-Title'>My Cart</p>
    </div>
    
    <div className='cart-Item-Panel'>
    {
        cartToshow.map(item => 
           
            <div>
            
              <div className='Cart-panel'>
    <div className='Cart-Subcard-panel-1'>
    <Image
            src={item.pic}
            alt="Picture of the author"
            width="80px"
            height="80px"
    />
    </div>
    <div className='Cart-Subcard-panel-2'>
    <a href={'http://localhost:3000/items/'+`${item.id}`}>
      <div className='Subcard-Heading'><h1>{item.name}</h1></div>
      <div className='Subcard-price'>$ 37.99</div>
      <div className='Subcard-Description'>{item.desc}</div>
      </a>
    </div>
    <div className='Cart-Subcard-panel-3'>
    
    <button   ><FontAwesomeIcon icon={faXmarkCircle} size="2x" className="x-botton"/></button>
    
   
    
    </div>
    
    
</div>
             </div>

            )
    }

    </div>
    <div>
        
    
    </div>
    <div className='checkout-Panel'>
        
        <p className='Cart-Label-Total'>Total: $32</p>
        <button className='CheckOut-Button'>Check Out</button>
    </div>
    </div>
  )
}

export default Cart