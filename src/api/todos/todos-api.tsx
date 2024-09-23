import { Todo } from "../../typs";

export const getTodos = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const jsonResp = await resp.json();
  return jsonResp as Todo[];
};
