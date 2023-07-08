import React, { FC } from "react";
import { Todo } from "../todo";
import { SkeletonLoading } from "../skeletonLoading";

import classes from "./todos.module.scss";

import { TodoType } from "../../types/todosTypes";

type TodosPropsType = {
  getTodosQuery: (url: string) => void;
  data: TodoType[] | undefined;
  isFetching: boolean;
};

export const Todos: FC<TodosPropsType> = React.memo(({ getTodosQuery, data, isFetching }) => {
  const arr = [1, 4, 3, 4, 2, 1, 6, 9, 0];

  return (
    <section className={classes.todos}>
      <ul className={classes["todos-list"]}>
        {isFetching
          ? arr.map((item, id) => (
              <React.Fragment key={id}>
                <SkeletonLoading item={item} />
              </React.Fragment>
            ))
          : data?.map((item) => (
              <React.Fragment key={item.id}>
                <Todo {...item} />
              </React.Fragment>
            ))}
      </ul>
    </section>
  );
});
