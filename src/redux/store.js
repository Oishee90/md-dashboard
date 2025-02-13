import { configureStore } from '@reduxjs/toolkit';
import authreducer from './feature/auth/authSlice'


export default configureStore({
  reducer: {
   auth : authreducer
  }
})