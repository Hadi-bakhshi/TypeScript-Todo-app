import React from "react";

interface TodoListProps {
  items: { id: string; text: string; isCompleted: boolean }[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onComplete, onDelete }) => {
  return (
    <div>
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>
            <span>
              <input
                type="checkbox"
                name="taskcheck"
                value=""
                onClick={() => onComplete(todo.id)}
              />
            </span>
            <button onClick={() => onDelete(todo.id)}>پاک کردن</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
