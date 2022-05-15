import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

interface AddTodoProps {

  selectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
interface Options {
  value: string;
  text: string;
}

const options: Options[] = [
  { value: "پیاده روی", text: "پیاده روی" },
  { value: "خرید", text: "خرید" },
  { value: "کلاس", text: "کلاس" },
  { value: "شرکت", text: "شرکت" },
  { value: "نوشیدن", text: "نوشیدن" },
  { value: "غذا خوردن", text: "غذا خوردن" },
];

const AddNewTodo: React.FC<AddTodoProps> = ({
  selectChange,
}) => {
  // state
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch()

  // Handlers
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const todoSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Please add your task");
    }
    dispatch(addTodo(inputValue))
    setInputValue("");
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <form className="flex flex-col" onSubmit={todoSubmitHandler}>
        <label htmlFor="todo-text">تسک خود را وارد کنید</label>
        <input
          type="text"
          id="todo-text"
          value={inputValue}
          name="text"
          onChange={changeHandler}
        />
        <label htmlFor="todoType">نوع تسک</label>
        <select id="todoType" onChange={(e) => selectChange(e)}>
          <option selected disabled>
            گزینه ها
          </option>
          {options.map((item ,index) => (
            <option key={index} value={item.value}>{item.text}</option>
          ))}
        </select>
        <button
          className="bg-indigo-500 text-white p-2 mt-2 rounded-lg"
          type="submit"
        >
          اضافه کردن
        </button>
      </form>
    </section>
  );
};

export default AddNewTodo;
