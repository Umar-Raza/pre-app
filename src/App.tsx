// import { useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
// import { PostsPage } from "./PostsPage";
// import AutoCounter from "./components/AutoCounter";

// import Welcomemassage from "./components/WelcomeMassage";
// import { LoginForm } from "./components/LoginForm";
import { getTodos } from "./api/todos/todos-api";

import { Todos } from "./components/Todos";
import { Todo } from "./typs";

// import { LoginForm } from "./components/LoginForm";
// import Counter from "./components/Counter";
// const [showCounter, setShowCounter] = useState(true);

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [finishedCount, setFinishedCount] = useState();

  useEffect(() => {
    console.log("App mounted");
    getTodos().then((todosFromServer) => {
      console.log({ todosFromServer });
      setTodos(todosFromServer);
      setTimeout(() => {
        setTodos((todoArray) => {
          return todoArray.map((item, index) => {
            if (index === 0) {
              return {
                ...item,
                completed: true,
              };
            }
            return item;
          });
        });
      }, 2000);
    });
  }, []);

  useEffect(() => {
    const count = todos.filter((todo) => todo.completed).length;
    setFinishedCount(count);
  }, [todos]);

  return (
    <div>
      <p className="text-2xl">
        Finished todo <span>{finishedCount}</span>
      </p>
      <Todos todoArray={todos} />

      {/* <LoginForm /> */}
      {/* <Todo /> */}
      {/* {showCounter && <AutoCounter />}
      <button
      onClick={() => {
        setShowCounter((show) => !show);
      }}
      >
        Toggle show Counter
      </button> */}
      {/* <PostsPage /> */}
      {/* <Todo />
      <Welcomemassage
        isLoggedin={true}
        user={{ name: "Umar", type: "admin" }}
      /> */}
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
