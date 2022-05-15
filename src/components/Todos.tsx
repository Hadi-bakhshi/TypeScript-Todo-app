import React, { ChangeEvent, useState } from "react";
import AddNewTodo from "./AddNewTodo";
import TodoList from "./TodoList";

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  date: string;
  TodoType?: string;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedOption, setSelectedOption] = useState<String>();


  const completeTodo = (id: string) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodos = { ...todos[index] };
    newTodos.isCompleted = !newTodos.isCompleted;
    const newTodoList = [...todos];
    newTodoList[index] = newTodos;
    setTodos(newTodoList);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const selectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  return (
    <main className="container bg-red-100 p-2">
      <AddNewTodo  selectChange={selectChange} />
      <TodoList />
    </main>
  );
};

export default Todos;
