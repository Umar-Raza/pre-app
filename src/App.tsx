import "./App.css";
import Welcomemassage from "./components/WelcomeMassage";
// import { LoginForm } from "./components/LoginForm";
import { Todo } from "./components/Todo";

function App() {
  return (
    <>
      <Todo />
      <Welcomemassage
        isLoggedin={true}
        user={{ name: "Umar", type: "admin" }}
      />
      {/* <LoginForm /> */}
    </>
  );
}

export default App;
