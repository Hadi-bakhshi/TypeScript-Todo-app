import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeTodo, selectTodos } from "../features/todos/todoSlice";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const items = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>
            <span>
              <input type="checkbox" name="taskcheck" value="" />
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              پاک کردن
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
