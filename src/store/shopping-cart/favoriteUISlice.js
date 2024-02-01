import { createSlice } from "@reduxjs/toolkit";

const favoriteUISlice = createSlice({
  name: "favoriteUi",
  initialState: { favoriteIsVisible: false },

  reducers: {
    toggle(state) {
      state.favoriteIsVisible = !state.favoriteIsVisible;
    },
  },
});

export const favoriteSliceUiActions = favoriteUISlice.actions;
export default favoriteUISlice;
