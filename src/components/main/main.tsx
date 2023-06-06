import { FC } from "react";
import { Todos } from "../todos";
import { Control } from "../control";
import { Sort } from "../sort";

import classes from "./main.module.scss";

export const Main: FC = () => {
  
  return (
    <main className={classes.main}>
      <h1 className={classes.main__title}>Todos App</h1>
      <Control />
      <Sort />
      <Todos />
    </main>
  );
};
