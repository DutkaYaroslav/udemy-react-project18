import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthinticate: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthinticate = true;
    },
    logout(state) {
      state.isAuthinticate = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
