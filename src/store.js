// store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Slices/DataSlices";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
