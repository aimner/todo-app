import { FC } from "react";
import { useGetTodosQuery } from "../../app/api/todosApi";
import React from "react";
import { Todo } from "../todo";
import ContentLoader from "react-content-loader";

import classes from "./todos.module.scss";
import { SkeletonLoading } from "../skeletonLoading";

export const Todos: FC = () => {
  const { data, isError, isLoading } = useGetTodosQuery(null);

  const arr = [1, 4, 3, 4, 2, 1, 6, 9, 0];

  return (
    <section className={classes.todos}>
      <ul className={classes["todos-list"]}>
        {isLoading &&
          arr.map((item, id) => (
            <React.Fragment key={id}>
              <SkeletonLoading item={item} />
            </React.Fragment>
          ))}
        {data?.map((item) => (
          <React.Fragment key={item.id}>
            <Todo {...item} />
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};
