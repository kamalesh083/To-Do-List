import { Todo } from "../types/todo";
import TodoItems from "./TodoItems";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onRemove: (id: number) => void;
}

export function TodoList({
  todos,
  onCompletedChange,
  onRemove,
}: TodoListProps) {
  const todoSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="mt-5 flex flex-col max-w-lg space-y-2 mx-auto rounded-md p-5">
        {todoSorted.map((todo) => (
          <TodoItems
            todo={todo}
            onCompletedChange={onCompletedChange}
            onRemove={onRemove}
            key={todo.id}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className=" text-center mb-5 text-gray-500">
          No todos yet. Add a new todo
        </p>
      )}
    </>
  );
}
