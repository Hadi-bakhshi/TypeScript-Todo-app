import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoProps {
  addTodoHandler: (todotext: string) => void;
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
  addTodoHandler,
  selectChange,
}) => {
  // state
  const [inputValue, setInputValue] = useState("");

  // Handlers
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const todoSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Please add your task");
    }
    addTodoHandler(inputValue);
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
          {options.map((item) => (
            <option value={item.value}>{item.text}</option>
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
