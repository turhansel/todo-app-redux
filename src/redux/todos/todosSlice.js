import { createSlice } from "@reduxjs/toolkit";

export const todosSlides = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: "1",
        title: "Learn Redux",
        completed: false,
      },
      {
        id: "2",
        title: "Read a book",
        completed: true,
      },
    ],
  },
  reducers: {
    addNewTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);

      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});

export const { addNewTodo, toggle, destroy } = todosSlides.actions;
export default todosSlides.reducer;
