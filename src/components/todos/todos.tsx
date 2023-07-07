import React, { FC, useEffect } from "react";
import { Todo } from "../todo";
import { SkeletonLoading } from "../skeletonLoading";

import classes from "./todos.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getTodos } from "../../app/slices/todoSlice";
import { TodoType } from "../../types/todosTypes";

type TodosPropsType = {
  getTodosQuery: (url: string) => void;
  data: TodoType[] | undefined;
  isFetching: boolean;
};

export const Todos: FC<TodosPropsType> = React.memo(({ getTodosQuery, data, isFetching }) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

  useEffect(() => {
    getTodosQuery("");
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(getTodos(data));
    }
  }, [data]);

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
          : todos?.map((item) => (
              <React.Fragment key={item.id}>
                <Todo {...item} />
              </React.Fragment>
            ))}
      </ul>
    </section>
  );
});
