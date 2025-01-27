import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; 
import cartReducer from './cartSlice';
import modalReducer from './modalSlice';
import todoReducer from './todoSlice'; 
import playersReducer from './playersSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    modal: modalReducer,
    todos: todoReducer,
    players: playersReducer,
  },
});

export default store;
