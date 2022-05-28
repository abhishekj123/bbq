import React from 'react'
import Image from 'next/image'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { useSelector , useDispatch  } from 'react-redux'
import { altercarteobj } from "../../actions"


const MenuitemCard = (props) => {

  const dispatch = useDispatch()
  let cartToshow =  useSelector(state => state.isCart)

  const AddtoCart = async (id,pic,name,desc,status,title) => {
    console.log('--------------------------')
    console.log(id)
    console.log(pic)
    console.log(name)
    console.log(desc)
    console.log(status)
    console.log(title)
    console.log('--------------------------')
    const CartItem = { 
      "title": title ,
      "description": desc,
	    "price":37.5,
	    "status":status,
	    "pic":pic

    };
    const response = await axios.post('http://localhost:3000/api/cart', CartItem);

    let obj = [...cartToshow,CartItem]
    
    console.log(cartToshow)
    dispatch(altercarteobj(obj))
    console.log(cartToshow)
    
  }

  const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            
            color:'#ffffff'
          },
        },
      },
    },
  });

  return (
    <div className='Subcard-panel'>
    <div className='Subcard-panel-1'>
    <Image
            src={props.pic}
            alt="Picture of the author"
            width="300px"
            height="300px"
    />
    </div>
    <div className='Subcard-panel-2'>
    <a href={'http://localhost:3000/items/'+`${props.id}`}>
      <div className='Subcard-Heading'><h1>{props.name}</h1></div>
      <div className='Subcard-price'>$ 37.99</div>
      <div className='Subcard-Description'>{props.desc}</div>
      </a>
    </div>
    <div className='Subcard-panel-3'>
    
    <button className='btn-blank'  onClick={e => AddtoCart(props.id, props.pic, props.name, props.desc, props.status, props.title)}><FontAwesomeIcon icon={faCartPlus} size="2x" className="highlight"/></button>
    
   
    
    </div>
    
    
</div>
  )
}

export default MenuitemCard