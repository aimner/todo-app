import React, { useEffect, useState } from "react";
import { useGetTodosQuery } from "./app/api/todosApi";
import { Todos } from "./components/todos/todos";

function App() {
  // const { data, isError, isLoading } = useGetTodosQuery(null);

  // if (isLoading) {
  //   return <h1>LOADING</h1>;
  // }

  // if (isError) {
  //   return null;
  // }
  // const x = 1;

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (darkTheme) {
      document.querySelector('html')?.setAttribute('data-theme', 'dark')
    } else {
      document.querySelector('html')?.setAttribute('data-theme', 'light')
    }
  }, [darkTheme])
  
  return (
    <>
      <button onClick={() => setDarkTheme(v => !v)}>Change Theme</button>
      <Todos/>
    </>
  );
}

export default App;
