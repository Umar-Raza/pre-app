import { useState } from "react";
import "./App.css";
import { PostsPage } from "./PostsPage";
import AutoCounter from "./components/AutoCounter";

// import Welcomemassage from "./components/WelcomeMassage";
// import { LoginForm } from "./components/LoginForm";
import { Todo } from "./components/Todo";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <>
      <Todo />
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
    </>
  );
}

export default App;
