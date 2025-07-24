import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      id: Date.now(),
      value: todo,
    };
    setTodos([...todos, data]);
    setTodo("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-4 p-4 bg-white shadow-md rounded-xl w-full max-w-md mx-auto mt-10"
    >
      <input
        type="text"
        value={todo}
        onChange={handleTodoChange}
        placeholder="Write a todo..."
        className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
