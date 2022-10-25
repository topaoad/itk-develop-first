import type { NextPage } from "next";
import { ChangeEventHandler, MouseEventHandler, useState, VFC } from "react";

type Todo = {
  id: number;
  label: string;
  isDone: boolean;
};

const Home: NextPage = () => {
  // 入力値を取得
  const [text, setText] = useState("");
  // todoリストを配列で取得
  const [todos, setTodos] = useState<Todo[]>([]);

  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  // MouseEventHandler<HTMLButtonElement>は講座内で説明し忘れたコードです
  // input, toggleと同じ要領で追加しています
  const add: MouseEventHandler<HTMLButtonElement> = () => {
    setTodos((prevTodos) => {
      // eslint-disable-next-line sort-keys-custom-order/object-keys
      return [...prevTodos, { id: Math.random(), label: text, isDone: false }];
    });
    setText("");
  };

  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        // 文字列をナンバー型に変換している
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div className="w-96 mx-auto p-20">
      <h1 className="text-xl font-bold">Todo</h1>
      <div className="flex gap-x-2">
        <input
          type="text"
          value={text}
          onChange={input}
          className="border border-black"
        />
        <button
          onClick={add}
          className="border border-black flex-shrink-0 px-2"
        >
          追加
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <ListItem todo={todo} toggle={toggle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

type ListItemProps = {
  todo: Todo;
  toggle: ChangeEventHandler<HTMLInputElement>;
};

const ListItem: VFC<ListItemProps> = ({ todo, toggle }) => {
  return (
    <label className="flex items-center gap-x-2">
      <input
        type="checkbox"
        value={todo.id}
        checked={todo.isDone}
        onChange={toggle}
      />
      <span>{todo.label}</span>
    </label>
  );
};

export default Home;
