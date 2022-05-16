import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

// App props types
interface AddTodoProps {}

// select options types
interface Options {
  value: string;
  text: string;
}

//state type
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
  { value: "سایر", text: "سایر" },
];

const AddNewTodo: React.FC<AddTodoProps> = () => {
  // state
  const [inputValue, setInputValue] = useState<TodoTypeAndValue[]>([]);
  const [valueSetter, setValueSetter] = useState("");
  const [selectValueReset, setSelectValueReset] = useState("");
  // action dispathcer
  const dispatch = useDispatch();

  //  Handlers
  // input change handler
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue([{ valueOfInput: e.target.value }]);
    setValueSetter(e.target.value);
  };
  // select change handler
  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputValue([...inputValue, { valueOfSelect: e.target.value }]);
    setSelectValueReset(e.target.value);
  };
  //from submit handler
  const todoSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.length === 1) {
      alert("لطفا نوع تسک را مشخص کنید");
    }
    dispatch(addTodo(inputValue));
    setInputValue([]);
    setValueSetter("");
    setSelectValueReset("");
  };

  return (
    <section className="fixed top-1 inset-x-0 mx-2 flex flex-col justify-center items-center p-4 bg-purple-300 rounded-lg shadow-md">
      <form className="flex flex-col" onSubmit={todoSubmitHandler}>
        <label htmlFor="todo-text" className="font-mono font-bold pb-2">
          تسک خود را وارد کنید
        </label>
        <input
          type="text"
          id="todo-text"
          name="text"
          value={valueSetter}
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
          value={selectValueReset}
          onChange={selectChangeHandler}
        >
          <option
            className="rounded-md font-mono bg-gray-50 overflow-hidden"
            defaultValue="else"
            disabled
          >
            گزینه ها
          </option>
          {options.map((item, index) => (
            <option
              className="rounded-md bg-purple-100 cursor-pointer"
              key={index}
              value={item.value}
            >
              {item.text}
            </option>
          ))}
        </select>

        <button
          className="fixed inset-x-1/3 md:static bottom-1  bg-purple-600 text-white font-semibold p-4 md:p-2 mt-2 rounded-lg hover:ring hover:right-1 hover:ring-offset-1 hover:ring-purple-400"
          type="submit"
        >
          اضافه کردن
        </button>
      </form>
    </section>
  );
};

export default AddNewTodo;
