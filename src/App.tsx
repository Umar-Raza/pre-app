import { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";
import { Note } from "./typs";
import { AppContext } from "./AppContext";

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
  const [notes, setNotes] = useState<Note[]>([
    {
      text: "note 1",
      id: 1,
      starred: true,
    },
    {
      text: "note 2",
      id: 2,
      starred: false,
    },
    {
      text: "note 3",
      id: 3,
      starred: false,
    },
    {
      text: "note 4",
      id: 4,
      starred: false,
    },
    {
      text: "note 5",
      id: 5,
      starred: false,
    },
    {
      text: "note 6",
      id: 6,
      starred: false,
    },
  ]);

  const toggleStarNote = (noteId: number) => {
    setNotes(
      notes.map((noteItem) => {
        if (noteItem.id === noteId) {
          return {
            ...noteItem,
            starred: !noteItem.starred,
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

  return (
    <AppContext.Provider value={{ notes, deleteNote, toggleStarNote }}>
      <Notes />

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
