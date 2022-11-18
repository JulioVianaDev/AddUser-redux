import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../Features/Users/UserSlice';
export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})