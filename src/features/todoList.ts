import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ToDo } from "../models/todo-item";

export interface TodoState {
  todos: ToDo[];
}

const initialState: TodoState = {
  todos: [
    { id: 1, text: "Купить молоко", isDone: false },
    { id: 2, text: "Сделать ToDo App", isDone: true }
  ],
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const text = action.payload.trim();
      if (!text) return;
      const nextId = state.todos.length ? Math.max(...state.todos.map(t => t.id)) + 1 : 1;
      state.todos.unshift({ id: nextId, text, isDone: false });
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      state.todos = state.todos.filter(t => t.id !== action.payload.id);
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      const t = state.todos.find(t => t.id === action.payload.id);
      if (t) t.isDone = !t.isDone;
    },
  },
});

export const { createAction, deleteAction, updateAction } = todoSlice.actions;
export default todoSlice.reducer;
