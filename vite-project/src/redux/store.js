import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import AddBlog from "./slices/addblogSlice";
import addblogSlice from "./slices/addblogSlice";
export const store = configureStore({
  reducer: {
    blogs: addblogSlice,
  },
});
