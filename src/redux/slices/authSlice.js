import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const login= createAsyncThunk( "auth/login" , async (userData, thunkAPI)=>{

    try{
        const response = await axios.post("/api/auth/login",userData )
        console.log(response)
        return (response.data)


    }
    
    catch(error){
        console.log(error)
        return (error.response.data.errors[0])
    }
    

})
const initialState = {
  user : null,
  encodedToken: null,
  error: null

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
    
  },

  extraReducers:{
    [login.pending] : (state)=>{
        state.user= null
        state.encodedToken = null
    },
    [login.fulfilled] : (state,action)=>{
        state.user= {...action.payload?.foundUser , password:"************"}
        state.encodedToken = action.payload?.encodedToken
    },
    [login.rejected] : (state,action)=>{
        console.log(action.payload)
        state.user= null
        state.encodedToken =null
        state.error = action.payload
    }
  }
})

// export const { } = authSlice.actions

export default authSlice.reducer