import allReducer from './index'
import { configureStore, createStore } from 'redux'

const myStore = createStore(
    allReducer,
    
    );


export default myStore
