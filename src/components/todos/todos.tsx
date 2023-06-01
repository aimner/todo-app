import { FC } from "react";
import { useGetTodosQuery } from "../../app/api/todosApi";
import React from "react";
import { Todo } from "../todo";

import classes from './todos.module.scss'

export const Todos: FC = () => {
  const { data, isError, isLoading } = useGetTodosQuery(null);
  

  if (!data) {
    return null;
  }

  return (
    <section className={classes.todos}>
      <ul className={classes['todos-list']}>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <Todo {...item} />
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};
