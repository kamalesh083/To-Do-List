import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onRemove: (id: number) => void;
}

export default function TodoItems({
  todo,
  onCompletedChange,
  onRemove,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border p-2 rounded-md  bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="mr-2 scale-125"
        />
        <span className={todo.completed ? " line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onRemove(todo.id)} className="p-2 rounded-md">
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}
