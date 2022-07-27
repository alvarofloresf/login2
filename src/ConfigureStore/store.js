import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../Store/authSlice'

export default configureStore({
  reducer: {
    authReducer:authSlice
  },
})