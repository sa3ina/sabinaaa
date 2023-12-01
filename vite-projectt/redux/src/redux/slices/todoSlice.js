import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  toppings: [],
  toggle: true,
};
export const todoSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addTopping: (state, action) => {
      let obj = { id: uuidv4(), title: action.payload };
      state.toppings.push(obj);
    },
    addToggle: (state) => {
      return { ...state, toggle: !state.toggle };
    },
    deletee: (state, action) => {
      state.toppings = state.toppings.filter(
        (elem) => elem.id != action.payload
      );
      // state.toppings.splice(action.payload, 1);
    },
  },
});
export const { addTopping, addToggle, deletee } = todoSlice.actions;
export default todoSlice.reducer;
