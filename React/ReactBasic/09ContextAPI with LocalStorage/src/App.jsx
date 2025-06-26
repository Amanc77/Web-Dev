import React, { useState, useEffect } from "react";
import { TodoProvider } from "./Contexts/TodoProvider"; // Update to correct import path
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Load from localStorage
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
        } else {
          console.warn(
            "Invalid todos data in localStorage, resetting to empty array."
          );
          setTodos([]);
        }
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      setTodos([]);
      localStorage.removeItem("todos"); // Clear corrupted data
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (Array.isArray(todos)) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="flex justify-center min-h-screen p-4 bg-gray-900">
        <div className="w-full max-w-lg p-6 bg-gray-800 shadow-lg rounded-4xl">
          <h1 className="mb-6 text-2xl font-bold text-center text-amber-200">
            Todo App
          </h1>
          <TodoForm />
          <div className="mt-4 space-y-2">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500">
                No todos yet. Add one!
              </p>
            ) : (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
