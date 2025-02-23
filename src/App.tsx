import { useState } from "react";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { data } from "./data/todos";
import { ListTodo } from "lucide-react";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState(data);

  function handleCompletedChange(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  return (
    <main className="flex flex-col lg:text-xl items-center justify-center h-screen">
      {/* Header Section */}
      <div className="flex items-center gap-2 mt-10">
        <h1 className="font-bold text-4xl from-gray-800 to-gray-900 bg-gradient-to-r bg-clip-text">
          TO-DO List
        </h1>
        <ListTodo size={35} className="text-gray-900" />
      </div>

      {/* Built with Love Section */}
      <span className="mt-5 font-medium text-lg">
        Built with <span className="mx-1 text-2xl">❤️</span> React + TypeScript
      </span>

      {/* Todos Section */}
      <h2 className="mt-5 text-2xl mb-5">Todos</h2>
      {/* AddTodoForm Component */}
      <AddTodoForm onSubmit={addTodo} />
      <div className="mt-5 flex flex-col max-w-lg space-y-2 mx-auto bg-slate-400 rounded-md p-5">
        {todos.map((todo) => (
          <TodoItems todo={todo} onCompletedChange={handleCompletedChange} />
        ))}
      </div>
    </main>
  );
}

export default App;
