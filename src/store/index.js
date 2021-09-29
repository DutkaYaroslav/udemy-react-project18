import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSliceReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSliceReducer },
});

export default store;
