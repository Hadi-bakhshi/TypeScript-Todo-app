import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  removeTodo,
  selectTodos,
  toggleTodo,
} from "../features/todos/todoSlice";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const items = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <section className="flex flex-col rounded-md overflow-hidden w-full mt-5 mx-auto">
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((todo) => (
          <ul className="bg-blue-50 flex flex-col rounded-md" key={todo.id}>
            <li className="flex flex-row py-5 justify-around items-center">
              <p>{todo.text}</p>
                <input
                  type="checkbox"
                  name="taskcheck"
                 className="cursor-pointer"
                  onClick={() => dispatch(toggleTodo(todo.id))}
                />
            </li>
              <button className="bg-violet-600 text-white text-sm rounded-md p-1 m-1" onClick={() => dispatch(removeTodo(todo.id))}>
                پاک کردن
              </button>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default TodoList;
