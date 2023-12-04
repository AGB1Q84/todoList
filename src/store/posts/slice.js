import { createSlice } from '@reduxjs/toolkit'
import { initialState } from "./initialState"
import { fetchPosts } from './action'

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: { 
      addPosts: (state, action) => {
        state.posts.push (action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
       state.posts = action.payload;
       state.isLoad = false;
    });
    builder.addCase (fetchPosts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoad = false;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoad = true;
    });
  }
})

export const { addPosts } = postsSlice.actions;
