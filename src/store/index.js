import { configureStore } from '@reduxjs/toolkit'
import { postsSlice } from './posts/slice'
import { usersSlice } from './users/slice'

export const store = configureStore({
  reducer: {
    postsReducer: postsSlice.reducer,
    usersReducer: usersSlice.reducer,
  },
})

