import changecartReducer from './cartobj'
import { combineReducers } from 'redux'

const allReducer = combineReducers({

    isCart:changecartReducer,
   

})

export default allReducer