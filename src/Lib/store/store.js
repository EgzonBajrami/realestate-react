import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'
import queryReducer from './slices/query'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    query: queryReducer
  },
})