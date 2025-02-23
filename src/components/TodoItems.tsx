import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoItems({ todo, onCompletedChange }: TodoItemProps) {
  return (
    <div>
      <label className="flex items-center gap-2 border p-2 rounded-md  bg-white hover:bg-slate-100">
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
    </div>
  );
}
