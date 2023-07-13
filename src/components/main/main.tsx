import { FC, useCallback, useState } from "react";
import { Todos } from "../todos";
import { Control } from "../control";
import { Sort } from "../sort";
import { useClickOutside } from "../../hooks";

import classes from "./main.module.scss";
import { useGetTodosQuery } from "../../app/api/todosApi";

export const Main: FC = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useClickOutside(false);

  const [activeSortTodoStatus, setActiveSortTodoStatus] = useState("");

  const {data, isFetching} = useGetTodosQuery(activeSortTodoStatus);

  const onGetTodosHandler = (url: string) => {
    setActiveSortTodoStatus(url)
  };

  return (
    <main className={classes.main}>
      <h1 className={classes.main__title}>Todos App</h1>
      <Control />
      <Sort
        refLink={ref}
        openSelect={isComponentVisible}
        setOpenSelect={setIsComponentVisible}
        getTodosQuery={onGetTodosHandler}
        data={data}
      />
      <Todos data={data} isFetching={isFetching} />
    </main>
  );
};
