import { configureStore } from '@reduxjs/toolkit'
import authReducer from './user/authSlice'
const store = configureStore({
  reducer: {
    atuh:authReducer,
  },
})

export default store