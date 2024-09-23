import React, { FC, useEffect } from "react";
import { Todo } from "../typs";



type TodoItemProps = {
  item: Todo;

  // onDelete: (itemId: number) => void;
};

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  // useEffect(() => {
  //   console.log(`component render for item ${item.id}`);

  //   return () => {
  //     console.log(`component removed for item ${item.id}`);
  //   };
  // }, []);

  return (
    <li id={`todo_item_${item.id}`}>{item.title}</li>
    // <li
    //   onClick={() => {
    //     onDelete(item.id);
    //   }}
    //   id={`todo item ${item.id}`}
    // >
    //   {item.text}
    // </li>
  );
};
