import React from "react";
import Todos from "./components/Todos";

const App:React.FC = () => {
  return <div className="flex items-center flex-col w-screen">
    <Todos/>
  </div>;
}

export default App;
