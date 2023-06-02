import { FC } from "react";
import { useGetTodosQuery } from "../../app/api/todosApi";
import React from "react";
import { Todo } from "../todo";
import ContentLoader from "react-content-loader";

import classes from "./todos.module.scss";

export const Todos: FC = () => {
  const { data, isError, isLoading } = useGetTodosQuery(null);

  const arr = [1, 4, 3, 4, 2, 1, 6, 9, 0];

  return (
    <section className={classes.todos}>
      <ul className={classes["todos-list"]}>
        {isLoading &&
          arr.map((item) => (
            <ContentLoader
              speed={2}
              width={290}
              height={`2${item}0`}
              viewBox={`0 0 290 2${item}0`}
              backgroundColor="#a4a4a4"
              foregroundColor="#636060">
              <rect x="-1" y="0" rx="20" ry="20" width="290" height={`2${item}0`} />
            </ContentLoader>
          ))}
        {data?.map((item) => (
          <React.Fragment key={item.id}>
            <Todo {...item} />
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
