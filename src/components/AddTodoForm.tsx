import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  const [input, setInput] = useState("");
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="p-2 border rounded-md w-80"
      />
      <button
        type="submit"
        className="bg-slate-400 hover:bg-slate-500 text-white p-2 rounded-md"
      >
        Add
      </button>
    </form>
  );
}
