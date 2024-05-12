import { createSlice } from "@reduxjs/toolkit";
const WishrSlice = createSlice({
  name: "wishListe",
  initialState: [],
  reducers: {
    addWish: (state, action) => {
      state.push(action.payload);
    },

    deleteWish: (state, action) => {
      const { id } = action.payload;
      const moviesDeleting = state.find((movie) => movie.id == id);
      if (moviesDeleting) {
        return state.filter((movie) => movie.id !== id);
      }
    },
  },
});
export const { addWish, deleteWish } = WishrSlice.actions;

export default WishrSlice.reducer;
