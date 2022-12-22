import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import { TodoHeaderRecoil } from "src/components/TodoHeaderRecoil";
import { todosState } from "src/state/todorecoil";
import { Todo } from "src/types/todo";

const Home: NextPage = () => {
  // Atomの状態読み取り
  const [todos, setTodos] = useRecoilState<Todo[]>(todosState);

  const toggleIsDone = (id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div>
      <TodoHeaderRecoil />
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
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

export default Home;
