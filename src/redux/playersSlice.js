import { createSlice } from '@reduxjs/toolkit';

const playersSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {
    addPlayer: (state, action) => {
      state.push(action.payload);
    },
    removePlayer: (state, action) => {
      return state.filter(player => player.id !== action.payload.id);
    },
    updateScore: (state, action) => {
      const player = state.find(player => player.id === action.payload.id);
      if (player) {
        player.score = action.payload.score;
      }
    },
  },
});

export const { addPlayer, removePlayer, updateScore } = playersSlice.actions;
export default playersSlice.reducer;
