import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const login= createAsyncThunk( "auth/login" , async (userData, thunkAPI)=>{

    try{
        const {data} = await axios.post("/api/auth/login",userData )
        return data
    }
    
    catch(error){
        console.log(error)
        return thunkAPI.rejectWithValue (error.response.data.errors[0])
    }
    

})


const initialState = {
  user : JSON.parse(localStorage.getItem("user")),
  encodedToken: JSON.parse(localStorage.getItem("token")),
  error: null,
  isAuthenticated:false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state)=>{
      state.error=null
    },
    logout:(state)=>{
      state.user= null
      state.encodedToken= null
      state.isAuthenticated= false
      localStorage.removeItem("user")
      localStorage.removeItem("token")
    }
    
  },

  extraReducers:{
    [login.pending] : (state)=>{
        state.user= null
        state.encodedToken = null
        state.isAuthenticated= false
    },
    [login.fulfilled] : (state,action)=>{
        state.user= {...action.payload?.foundUser , password:"************"}
        state.encodedToken = action.payload?.encodedToken
        localStorage.setItem("user", JSON.stringify(state.user))
        localStorage.setItem("token", JSON.stringify(state.encodedToken))
        state.isAuthenticated= true

    },
    [login.rejected] : (state,action)=>{
        state.user= null
        state.encodedToken =null
        state.error = action.payload
        state.isAuthenticated= false
    }
  }
})

export const { clearError , logout} = authSlice.actions

export default authSlice.reducer