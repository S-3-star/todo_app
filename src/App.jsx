import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
  <div className="text-center text-4xl"> Todo App</div>
    <TodoForm/>
    <TodoList/>
    </>
  )
}


export default App;
