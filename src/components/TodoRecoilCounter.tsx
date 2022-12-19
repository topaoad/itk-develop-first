import { FC } from "react";
import { useRecoilValue } from "recoil";

import { todosLengthState} from "../state/todorecoil";

export const TodoRecoilCounter: FC = () => {
  const todoslength= useRecoilValue(todosLengthState);
  return <h2>TODO: {todoslength}件</h2>;
};
