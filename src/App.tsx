import React from "react";
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
  
  return (
    <>
      <Todos/>
    </>
  );
}

export default App;
