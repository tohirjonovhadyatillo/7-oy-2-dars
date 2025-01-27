import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state = state.filter(item => item.id !== action.payload.id);
        }
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
