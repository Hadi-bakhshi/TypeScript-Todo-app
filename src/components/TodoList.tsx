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
    <section className="mt-[190px] md:mt-[250px] flex flex-col rounded-md w-full mx-auto mb-14">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((todo) => (
          <ul className=" bg-purple-100 flex flex-col rounded-md" key={todo.id}>
            <li className="flex flex-row py-5 justify-around items-center">
              <p
                className={
                  todo.isCompleted
                    ? "text-purple-500"
                    : "text-purple-900 font-semibold"
                }
              >
                {todo.text}
              </p>
              <input
                type="checkbox"
                name="taskcheck"
                className="cursor-pointer"
                onClick={() => dispatch(toggleTodo(todo.id))}
              />
            </li>
            <span className="text-center text-violet-300 mb-2">
              {todo.todoType}
            </span>
            <button
              className=" bg-purple-600 text-white text-sm rounded-md p-1 m-1 hover:ring hover:right-1 hover:ring-offset-1 hover:ring-purple-300"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              پاک کردن
            </button>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default TodoList;
