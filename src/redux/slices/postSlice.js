import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async (thunkAPI) => {
    try {
      const res = await axios.get("/api/posts");
      return res.data.posts;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectedWithValue(error);
    }
  }
);

export const createPost = createAsyncThunk(
  "post/create",
  async (data, thunkAPI) => {
    const { text, encodedToken } = data;
    try {
      const res = await axios.post(
        "/api/posts",
        { postData: text },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      return res.data.posts.reverse();
    } catch (error) {
      thunkAPI.rejectedWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/delete",
  async (data, thunkAPI) => {
    console.log(data);
    const { token, postId } = data;
    try {
      const { data } = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
      });
      return data.posts;
    } catch (error) {
      thunkAPI.rejectedWithValue(error);
    }
  }
);

const initialState = {
  error: null,
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPost.pending]: (state) => {
      state.error = null;
      state.posts = null;
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.error = null;
      state.posts = action.payload;
    },

    [fetchPost.rejected]: (state, action) => {
      state.error = action.error;
      state.posts = null;
    },
    [createPost.pending]: (state) => {
      state.error = null;
      state.posts = null;
    },
    [createPost.fulfilled]: (state, action) => {
      state.error = null;
      state.posts = action.payload;
    },
    [createPost.rejected]: (state, action) => {
      state.error = action.error;
      state.posts = null;
    },
    [deletePost.pending]: (state) => {
      state.error = null;
      state.posts = null;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.error = null;
      state.posts = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.error = action.error;
      state.posts = null;
    },

    // below code is for future use

    // [editPost.pending]:(state)=>{
    //     state.error= null
    //     state.posts= null
    // },
    // [editPost.fulfilled]:(state,action)=>{
    //     state.error= null
    //     state.posts= action.payload
    // },
    // [editPost.rejected]:(state, action)=>{
    //     state.error= action.payload
    //     state.posts= null
    // },
  },
});

export default postSlice.reducer;
