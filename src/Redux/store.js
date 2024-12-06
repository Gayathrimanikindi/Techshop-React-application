import { configureStore } from "@reduxjs/toolkit";
import addCartReducer from './AddCartReducer'

const store = configureStore({
    reducer:{
        cartData: addCartReducer,
    }
})

export default store