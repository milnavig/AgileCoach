import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    value: [{id: '1212', type: 'request', text: 'ewewewewweww wewewewew wwew wewewwe wewew ewewewewweww wewewewew wwew wewewwe wewew'}],
  },
  reducers: {
    addMessage: (state, message) => {
      state.value.push(message.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;