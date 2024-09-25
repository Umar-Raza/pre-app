import { useEffect, useState } from "react";
import "./App.css";
import Notes from "./components/Notes";
import { Note } from "./typs";
import { AppContext } from "./AppContext";
import { useWindowResize } from "./hooks/useWindowSize";
import { useFetch } from "./hooks/useFetch";

// import { PostsPage } from "./PostsPage";
// import AutoCounter from "./components/AutoCounter";
// import Welcomemassage from "./components/WelcomeMassage";
// import { LoginForm } from "./components/LoginForm";
// import { getTodos } from "./api/todos/todos-api";
// import { Todos } from "./components/Todos";
// import { Todo } from "./typs";
// import { LoginForm } from "./components/LoginForm";
// import Counter from "./components/Counter";
// const [showCounter, setShowCounter] = useState(true);

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [finishedCount, setFinishedCount] = useState();

  // useEffect(() => {
  //   console.log("App mounted");
  //   getTodos().then((todosFromServer) => {
  //     console.log({ todosFromServer });
  //     setTodos(todosFromServer);
  //     setTimeout(() => {
  //       setTodos((todoArray) => {
  //         return todoArray.map((item, index) => {
  //           if (index === 0) {
  //             return {
  //               ...item,
  //               completed: true,
  //             };
  //           }
  //           return item;
  //         });
  //       });
  //     }, 2000);
  //   });
  // }, []);

  // useEffect(() => {
  //   const count = todos.filter((todo) => todo.completed).length;
  //   setFinishedCount(count);
  // }, [todos]);
  const [notes, setNotes] = useState<Note[]>([]);

  const size = useWindowResize();
  const { data, loading } = useFetch<Note[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  useEffect(() => {
    setNotes(data ? data : []);
  }, [data]);

  const toggleStarNote = (noteId: number) => {
    setNotes(
      notes.map((noteItem) => {
        if (noteItem.id === noteId) {
          return {
            ...noteItem,
            complete: !noteItem.complete,
          };
        }
        return noteItem;
      })
    );
  };

  const deleteNote = (noteId: number) => {
    setNotes(
      notes.filter((noteItem) => {
        return noteItem.id !== noteId;
      })
    );
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <AppContext.Provider value={{ notes, deleteNote, toggleStarNote }}>
      {size.width < 360 ? <h1>Resulution is note Sported.</h1> : <Notes />}

      {/* <p className="text-2xl">
        Finished todo <span>{finishedCount}</span>
      </p>
      <Todos todoArray={todos} /> */}

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
    </AppContext.Provider>
  );
}

export default App;
