import { createContext, useContext } from "react";

// Default structure — used only for autocomplete and safety
export const TodoContext = createContext({
  todos: [{ id: 0, todo: "", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Custom hook to use context
export const useTodo = () => useContext(TodoContext);

// Just exporting Provider separately
export const TodoProvider = TodoContext.Provider;
