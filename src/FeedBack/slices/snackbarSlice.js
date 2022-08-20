import { createSlice } from "@reduxjs/toolkit";
export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    show: false,
    text: "",
  },
  reducers: {
    showSnackbar: (state, { payload }) => {
      state.show = true;
      state.text = payload.text;
      
    },
    hideSnackbar: (state, { payload }) => {
      state.show = false;
    },
  },
});
export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export const snackbarSelector = (state) => state.feedBack.snackbar;
export default snackbarSlice.reducer;
