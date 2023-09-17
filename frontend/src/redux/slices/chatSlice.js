import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    value: [],
  },
  reducers: {
    setHistory: (state, message) => {
      state.value = message.payload;
    },
    addMessage: (state, message) => {
      state.value.push(message.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHistory, addMessage } = chatSlice.actions;

export default chatSlice.reducer;