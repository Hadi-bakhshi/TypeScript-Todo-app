import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  date: string;
  todoType?: string;
}

interface TodosSliceState {
  todos: Todo[];
}

const initialState: TodosSliceState = {
  todos: [],
};

const getTheDate = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date.toString() + " " + time.toString();
  return dateTime;
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: { todos: any[] }, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: Math.random(),
          text: action.payload,
          isCompleted: false,
          date: getTheDate(),
        },
      ];
    },
    removeTodo: (state: { todos: any[] }, action: PayloadAction<number>) => {
      const filteredTodos = state.todos.filter((t) => t.id !== action.payload);
      state.todos = filteredTodos;
    },
    toggleTodo: (state: { todos: any[] }, action: PayloadAction<number>) => {
      const selectedTodo = state.todos.find((t) => t.id === action.payload);
      selectedTodo.isCompleted = !selectedTodo.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
export const selectTodos = (state: RootState) => state.todos.todos;
