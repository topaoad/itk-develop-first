import type { NextPage } from "next";
import { store, toggleIsDone } from "src/state/todo";
import { useSnapshot } from "valtio";

const ValtioPage: NextPage = () => {
  const { todos } = useSnapshot(store);

  return (
    <div className="flex flex-wrap flex-col justify-center items-center">
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div className="space-y-4 first:mr-1 mt-2" key={todo.id}>
          <label
            className="flex align-center first:mr-1 "
            style={{ fontSize: "1rem" }}
          >
            <input
              type="checkbox"
              className="inline-block mr-1 "
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ValtioPage;
