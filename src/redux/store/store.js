import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import postReducer from '../slices/postSlice';
import commentReducer from '../slices/commentSlice';
import bookmarkReducer from '../slices/bookmarkSlice';
import userReducer from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    auth : authReducer,
    post : postReducer,
    comment : commentReducer,
    bookmark : bookmarkReducer,
    user: userReducer
  },
})



