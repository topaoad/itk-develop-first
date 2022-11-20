/* eslint-disable no-console */
import type { NextPage } from "next";
import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";

type Todo = {
  id: number;
  isDone: boolean;
  label: string;
  removed: boolean;
};

type ListItemProps = {
  todo: Todo;
  toggle: ChangeEventHandler<HTMLInputElement>;
};

const Home: NextPage = () => {
  // 入力値を取得⇐ここをReduxに置き換える
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
      return [
        ...prevTodos,
        { id: Math.random(), isDone: false, label: text, removed: false },
      ];
    });
    // 入力文字をリセット
    setText("");
  };

  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodos((prevTodos) => {
      console.log(e);
      return prevTodos.map((todo) => {
        // 文字列をナンバー型に変換している
        if (todo.id === Number(e.target.value)) {
          // ...todoでtodoのプロパティを返してやらないとtoggle対象のtodoプロパティラベルが表示されなくなる。
          // todoの仮名でisDoneプロパティだけひっくり返している。
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  // 削除するコンポーネント
  // 念のためremoveプロパティを取得しているが、実際は使っていない。
  const deleteList = (id: number, removed: boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.removed = !todo.removed;
        console.log(todo);
      }
      return todo;
    });
    // こっちでは削除対象のremovedを入れ替えてはいるものの・・・
    console.log(newTodos);
    setTodos(newTodos);
     // こっちでは元に戻っている・・・
    console.log(todos);
    // 選んだIDのリストを配列から削除している。
    // setTodos(todos.filter((todo) => todo.id !== id));
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const ListItem: FC<ListItemProps> = ({ todo, toggle }) => {
    return (
      <label className="flex items-center gap-x-2">
        <input
          type="checkbox"
          value={todo.id}
          checked={todo.isDone}
          onChange={toggle}
        />
        <span>{todo.label}</span>
        <button
          value={todo.id}
          onClick={() => deleteList(todo.id, todo.removed)}
          className="border border-black flex-shrink-0 px-2"
        >
          削除
        </button>
      </label>
    );
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

export default Home;
