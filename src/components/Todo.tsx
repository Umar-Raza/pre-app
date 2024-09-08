import { useState } from "react";
export const Todo = () => {
  const [todos, setTodos] = useState([
    {
      text: "todo1",
      id: 1,
    },
    {
      text: "todo2",
      id: 2,
    },
    {
      text: "todo3",
      id: 3,
    },
  ]);

  const deleteItem = (itemId: number) => {
    setTodos(
      todos.filter((itemEl) => {
        return itemEl.id !== itemId;
      })
    );
  };

  return (
    <ul>
      {todos.map((todoItem) => {
        return (
          <li
            onClick={() => {
              deleteItem(todoItem.id);
            }}
            key={todoItem.id}
          >
            {todoItem.text}
          </li>
        );
      })}
    </ul>
  );
};
