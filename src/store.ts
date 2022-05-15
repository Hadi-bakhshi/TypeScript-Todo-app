import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todos/todoSlice";


export const store = configureStore({
  reducer: {
      todos: todoSlice
  },
});
export type RootState = ReturnType<typeof store.getState>
