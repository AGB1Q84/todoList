import { createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "../../api"

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, thunkAPI) => {

    try { 
        const response = await API.get('posts')
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue("Произошла ошибка");
    }
    }
  )