import { useRef, useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
    inputRef.current?.focus();
  }

  const [input, setInput] = useState("");
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="p-2 border rounded-md w-80 bg-white"
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
