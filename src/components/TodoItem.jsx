import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { todos, setTodos } = useContext(TodoContext);

  const handleDelete = () => {
    const newTodo = todos.filter((item) => item.id !== todo.id);
    setTodos(newTodo);
  };

  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-6 py-4 mb-4 shadow-sm hover:shadow-md transition duration-300">
      <p className="text-lg font-medium text-gray-800 w-full break-words">
        {todo?.value}
      </p>
      <button
        onClick={handleDelete}
        className="ml-4 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-xl hover:bg-red-600 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
