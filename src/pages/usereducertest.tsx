//useReducerをimport
import { Button } from "@mantine/core";
import React, { useReducer } from "react";

type recucerprops = {
  countState: number;
  action: string;
};

//counterの初期値を0に設定
const initialState = 0;
//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState:number, action: string) => {
  //reducer関数にincrement、increment、reset処理を書く
  //どの処理を渡すかはactionを渡すことによって判断する
  // 以前のstateは...countStateで取得可能
  switch (action) {
    case "increment":
      return countState + 1;
    case "decrement":
      return countState - 1;
    case "reset":
      return initialState;
    default:
      return countState;
  }
};
const Counter = () => {
  //作成したreducerFunc関数とcountStateをuseReducerに渡す
  //useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
  const [count, dispatch] = useReducer(reducerFunc, initialState);
  //カウント数とそれぞれのactionを実行する<Button/>を設置する
  return (
    <>
      <h2>カウント：{count}</h2>
      <Button className="bg-black" onClick={() => dispatch("increment")}>
        increment
      </Button>
      <Button className="bg-black ml-[10px]" onClick={() => dispatch("reset")}>
        reset
      </Button>
      <Button
        className="bg-black ml-[10px]"
        onClick={() => dispatch("decrement")}
      >
        decrement
      </Button>
    </>
  );
};

export default Counter;


