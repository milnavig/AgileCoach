import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './redux/slices/chatSlice';

export default configureStore({
  reducer: {
    chat: chatReducer
  },
});