import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log("addTodo");
      console.log(action.payload);
      state.value.push(action.payload);
    },
    deleteTodo: (state, action) => {
      console.log("deleteTodo");
      console.log(action.payload);
      state.value = state.value.filter((el) => el.title != action.payload);
    },
    changeStatus: (state, action) => {
      console.log("changeStatus");
      console.log(action.payload);
      state.value = state.value.map((el) => {
        if (el.title == action.payload) {
          el.status = !el.status;
        }
        return el;
      });
    },
  },
});

export const { addTodo, changeStatus, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
