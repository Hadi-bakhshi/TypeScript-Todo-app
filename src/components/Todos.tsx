import React from "react";
import AddNewTodo from "./AddNewTodo";
import TodoList from "./TodoList";

const Todos: React.FC = () => {




  return (
    <main className="container p-2">
      <AddNewTodo />
      <TodoList />
    </main>
  );
};

export default Todos;
