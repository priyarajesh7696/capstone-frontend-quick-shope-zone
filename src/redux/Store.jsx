import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './Cartslice'
export default configureStore({
  reducer: {
    carts:CartReducer
  },
})