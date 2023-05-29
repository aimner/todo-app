import React from "react";
import { useGetTodosQuery } from "./app/api/todosApi";

function App() {
  const { data, isError, isLoading } = useGetTodosQuery(null);

  if (isLoading) {
    return <h1>LOADING</h1>;
  }

  if (isError) {
    return null;
  }
  const x = 1;
  
  return (
    <div>
      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
}

export default App;
