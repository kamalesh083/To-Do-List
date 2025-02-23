import "./App.css";

import { ListTodo } from "lucide-react";
import AddTodoForm from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

import useTodo from "./hooks/useTodo";

function App() {
  const {
    todos,
    addTodo,
    handleCompletedChange,
    deleteTodo,
    deleteAllCompleted,
  } = useTodo();

  return (
    <main className="flex flex-col lg:text-lg items-center justify-center h-screen overflow-y-auto">
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
      <div className="flex flex-col items-center bg-slate-300 rounded-md p-5 shadow-md">
        <AddTodoForm onSubmit={addTodo} />
        {/* TodoItems Component */}
        <TodoList
          todos={todos}
          onCompletedChange={handleCompletedChange}
          onRemove={deleteTodo}
        />

        <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
      </div>
    </main>
  );
}

export default App;
