import React, { FC, useEffect } from "react";

type Todo = {
  text: string;
  id: number;
};

type TodoItemProps = {
  item: Todo;
  onDelete: (itemId: number) => void;
};

export const TodoItem: FC<TodoItemProps> = ({ item, onDelete }) => {
  useEffect(() => {
    console.log(`component render for item ${item.id}`);

    return () => {
      console.log(`component removed for item ${item.id}`);
    };
  }, []);

  return (
    <li
      onClick={() => {
        onDelete(item.id);
      }}
      id={`todo item ${item.id}`}
    >
      {item.text}
    </li>
  );
};
