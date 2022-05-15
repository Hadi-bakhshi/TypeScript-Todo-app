import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

interface AddTodoProps {}
interface Options {
  value: string;
  text: string;
}
export interface TodoTypeAndValue {
  valueOfInput?: string;
  valueOfSelect?: string;
}

const options: Options[] = [
  { value: "پیاده روی", text: "پیاده روی" },
  { value: "خرید", text: "خرید" },
  { value: "کلاس", text: "کلاس" },
  { value: "شرکت", text: "شرکت" },
  { value: "نوشیدن", text: "نوشیدن" },
  { value: "غذا خوردن", text: "غذا خوردن" },
];

const AddNewTodo: React.FC<AddTodoProps> = () => {
  // state
  const [inputValue, setInputValue] = useState<TodoTypeAndValue[]>([]);

  const dispatch = useDispatch();

  //  Handlers
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue([...inputValue, { valueOfInput: e.target.value }]);
  };
  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setInputValue([...inputValue, { valueOfSelect: value }]);
  };

  const todoSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue([]);
  };

  return (
    <section className="flex flex-col justify-center items-center p-4 bg-violet-300 rounded-lg shadow-md">
      <form className="flex flex-col" onSubmit={todoSubmitHandler}>
        <label htmlFor="todo-text" className="font-mono font-bold pb-2">
          تسک خود را وارد کنید
        </label>
        <input
          type="text"
          id="todo-text"
          // value={inputValue}
          name="text"
          onChange={changeHandler}
          className="bg-white rounded-md shadow-md p-1"
          placeholder="  اینحا بنویسید ..."
        />
        <label htmlFor="todoType" className="font-mono font-bold py-2">
          نوع تسک
        </label>
        <select
          className="bg-white rounded-md shadow-md p-1 mb-4 cursor-pointer"
          id="todoType"
          onChange={selectChangeHandler}
        >
          <option
            className="rounded-md font-mono bg-gray-50 overflow-hidden"
            selected
            disabled
          >
            گزینه ها
          </option>
          {options.map((item, index) => (
            <option
              className="rounded-md font-mono bg-gray-100 cursor-pointer overflow-hidden"
              key={index}
              value={item.value}
            >
              {item.text}
            </option>
          ))}
        </select>

        <button
          className="fixed inset-x-1/3 bottom-2  bg-violet-600 text-white p-2 mt-2 rounded-lg"
          type="submit"
        >
          اضافه کردن
        </button>
      </form>
    </section>
  );
};

export default AddNewTodo;
