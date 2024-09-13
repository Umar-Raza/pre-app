import { useState } from "react";
import "./App.css";
// import { PostsPage } from "./PostsPage";
// import AutoCounter from "./components/AutoCounter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
// import Welcomemassage from "./components/WelcomeMassage";
// import { LoginForm } from "./components/LoginForm";
// import { Todo } from "./components/Todo";
import { LoginForm } from "./components/LoginForm";

function App() {
  // const [showCounter, setShowCounter] = useState(true);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <LoginForm />
        </CssBaseline>
      </ThemeProvider>

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
    </>
  );
}

export default App;
