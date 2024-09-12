import { useState } from "react";
import { TodoItem } from "./TodoItem";
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
    {
      text: "todo4",
      id: 4,
    },
    {
      text: "todo5",
      id: 5,
    },
    {
      text: "todo6",
      id: 6,
    },
  ]);

  const deleteItem = (itemId: number) => {
    setTodos(
      todos.filter((itemEl) => {
        return itemEl.id !== itemId;
      })
    );
  };

  const addnewTodo = () => {
    setTodos((todos) => {
      return [
        {
          text: "new todo",
          id: Date.now(),
        },
        ...todos,
      ];
    });
  };

  return (
    <ul>
      <li>
        <button onClick={addnewTodo}>Click to add new todo</button>
      </li>

      {todos.map((todoItem) => {
        return (
          <TodoItem key={todoItem.id} item={todoItem} onDelete={deleteItem} />
        );
      })}
      {/* {todos.map((todoItem) => {
        return (
          <li id={`todo_item_${todoItem.id}`}
            onClick={() => {
              deleteItem(todoItem.id);
            }}
            key={todoItem.id}
          >
            {todoItem.text}
          </li>
        );
      })} */}
    </ul>
  );
};
