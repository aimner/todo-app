import React from "react";
import classes from "./main.module.scss";
import { Todos } from "../todos";
import { useGetTodosQuery } from "../../app/api/todosApi";
import { Control } from "../control";

export const Main = () => {
  const { data, isError, isLoading,  } = useGetTodosQuery(null);

  if (isLoading) {
    return <h1>LOADING</h1>;
  }

  if (!data) {
    return null;
  }

  return (
    <main className={classes.main}>
      <h1 className={classes["main-title"]}>Todos App</h1>
      <Todos todos={data}/>
      <Control />
    </main>
  );
};
