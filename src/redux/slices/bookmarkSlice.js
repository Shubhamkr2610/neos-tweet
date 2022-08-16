import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";



export const fetchBookMark = createAsyncThunk("/bookmark/fetch", async (thunkAPI)=>{

    try {
        const res = await axios.get("",{})
        console.log(res)
    } catch (error) {
       return  thunkAPI.rejectedWithValue(error)
    }
})

export const addToBookMark = createAsyncThunk("/bookmark/add", async (data, thunkAPI)=>{
    const {token , postId}=data
    try {
        const {data} = await axios.post(`/api/users/bookmark/${postId}`,{},{
            headers:{
                authorization: token,
            },
        })
        toast.success("Post Bookmarked successfully ")
        return data.bookmarks

    } catch (error) {
        thunkAPI.rejectedWithValue(error)
    }
})

export const removefromBookMark = createAsyncThunk("/bookmar/remove", async (data, thunkAPI)=>{
    const {token , postId}=data
    try {
        const data = await axios.post(`/api/users/remove-bookmark/${postId}`,{},{
                headers:{
                    authorization:token,
                },
        })
        toast.error("Post removed from Bookmark")
        return data.bookmarks
        
    } catch (error) {
       return thunkAPI.rejectedWithValue(error)
    }
}) 


const initialState = {
    erorr: null,
    bookmarks: null
}
export const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState,
    reducres:{},
    extraReducers:{
        [fetchBookMark.pending]:(state)=>{
            state.error= null;
            state.bookmarks= null;
        },
        [fetchBookMark.fulfilled]:(state, action )=>{
            state.erorr= null;
            state.bookmarks= action.payload;
        },
        [fetchBookMark.rejected]:(state, action)=>{
            state.error= action.payload;
            state.bookmarks= null
        },
        [addToBookMark.pending]:(state)=>{
            state.error= null;
            state.bookmarks= null;
        },
        [addToBookMark.fulfilled]:(state, action)=>{
            state.error= null;
            state.bookmarks= action.payload;
        },
        [addToBookMark.rejected]:(state, action)=>{
            state.erorr= action.payload;
            state.bookmarks= null;
        },
        [removefromBookMark.pending]:(state)=>{
            state.error= null;
            state.bookmarks= null;
        },
        [removefromBookMark.fulfilled]:(state, action)=>{
            state.erorr=null;
            state.bookmarks= action.payload;
        },
        [removefromBookMark.rejected]:(state, action)=>{
            state.erorr= action.payload;
            state.bookmarks= null;
        }
    }
})

export default bookmarkSlice.reducer;