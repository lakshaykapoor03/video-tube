import { createSlice } from "@reduxjs/toolkit";

const suggestionsSlice = createSlice({
  name: "suggestionsSlice",
  initialState: {
    showSuggestions: true,
  },

  reducers: {
    show: (state) => {
      state.showSuggestions = true;
    },

    hide: (state) => {
      state.showSuggestions = false;
    },
  },
});

export const {show, hide} = suggestionsSlice.actions;

export default suggestionsSlice.reducer;
